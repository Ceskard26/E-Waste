'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Camera, X, RotateCcw, Flashlight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CameraCaptureProps {
  onCapture: (file: File) => void
  onClose: () => void
}

export function CameraCapture({ onCapture, onClose }: CameraCaptureProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment')
  const [hasFlash, setHasFlash] = useState(false)
  const [flashEnabled, setFlashEnabled] = useState(false)

  const startCamera = async () => {
    try {
      // Stop existing stream
      if (stream) {
        stream.getTracks().forEach(track => track.stop())
      }

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: facingMode,
          width: { ideal: 1920, max: 1920 },
          height: { ideal: 1080, max: 1080 }
        }
      })
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream
        setStream(mediaStream)
        
        // Check if device has flash
        const track = mediaStream.getVideoTracks()[0]
        const capabilities = track.getCapabilities()
        setHasFlash('torch' in capabilities)
      }
    } catch (error) {
      console.error('Error accessing camera:', error)
      alert('No se pudo acceder a la cámara. Por favor, permite el acceso o usa la opción de subir archivo.')
    }
  }

  const toggleFlash = async () => {
    if (!stream || !hasFlash) return
    
    const track = stream.getVideoTracks()[0]
    try {
      await track.applyConstraints({
        advanced: [{ torch: !flashEnabled } as any]
      })
      setFlashEnabled(!flashEnabled)
    } catch (error) {
      console.error('Error toggling flash:', error)
    }
  }

  const switchCamera = () => {
    setFacingMode(facingMode === 'user' ? 'environment' : 'user')
  }

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return

    const video = videoRef.current
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    if (!context) return

    // Set canvas dimensions to match video
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    // Draw video frame to canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height)

    // Convert to blob and create file
    canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], `e-cycle-${Date.now()}.jpg`, { type: 'image/jpeg' })
        onCapture(file)
        stopCamera()
        onClose()
      }
    }, 'image/jpeg', 0.9)
  }

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop())
      setStream(null)
    }
  }

  useEffect(() => {
    startCamera()
    return () => stopCamera()
  }, [facingMode])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-black/50 text-white">
        <h3 className="text-lg font-semibold">📱 Capturar E-cycle</h3>
        <Button variant="ghost" size="icon" onClick={() => { stopCamera(); onClose(); }}>
          <X className="h-6 w-6 text-white" />
        </Button>
      </div>

      {/* Camera View */}
      <div className="flex-1 relative overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
        
        {/* Google Lens Style Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Scanning Frame */}
          <div className="relative">
            <div className="border-2 border-white/70 rounded-2xl w-72 h-72 relative">
              {/* Corner indicators */}
              <div className="absolute -top-1 -left-1 w-8 h-8 border-l-4 border-t-4 border-white rounded-tl-2xl"></div>
              <div className="absolute -top-1 -right-1 w-8 h-8 border-r-4 border-t-4 border-white rounded-tr-2xl"></div>
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-l-4 border-b-4 border-white rounded-bl-2xl"></div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-4 border-b-4 border-white rounded-br-2xl"></div>
              
              {/* Scanning line animation */}
              <motion.div
                className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
                animate={{ y: [0, 280, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            
            {/* Instructions */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-white text-sm bg-black/50 px-4 py-2 rounded-full">
                🔍 Centra el dispositivo electrónico
              </p>
            </div>
          </div>
        </div>

        {/* Top Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          {hasFlash && (
            <Button 
              variant="ghost" 
              size="icon" 
              className={`w-12 h-12 rounded-full ${flashEnabled ? 'bg-yellow-500/20' : 'bg-black/30'}`}
              onClick={toggleFlash}
            >
              <Flashlight className={`h-6 w-6 ${flashEnabled ? 'text-yellow-400' : 'text-white'}`} />
            </Button>
          )}
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-12 h-12 rounded-full bg-black/30"
            onClick={switchCamera}
          >
            <RotateCcw className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center justify-center space-x-8">
          {/* Gallery placeholder */}
          <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/30"></div>
          
          {/* Capture Button */}
          <motion.button 
            onClick={capturePhoto}
            className="w-20 h-20 rounded-full bg-white border-4 border-white/30 flex items-center justify-center shadow-lg"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <Camera className="h-8 w-8 text-black" />
            </div>
          </motion.button>
          
          {/* Switch camera indicator */}
          <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center">
            <span className="text-white text-xs">
              {facingMode === 'environment' ? '📷' : '🤳'}
            </span>
          </div>
        </div>
        
        <p className="text-white text-center text-sm mt-4 opacity-80">
          Toca el botón blanco para capturar • Usa el marco para enfocar
        </p>
      </div>

      <canvas ref={canvasRef} className="hidden" />
    </motion.div>
  )
}