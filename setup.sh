#!/bin/bash

echo "🌱 Setting up E-waste project..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    echo "✅ .env file created from .env.example"
fi

echo ""
echo "🚀 Setup complete! You can now run:"
echo "   npm run dev    # Start development server"
echo "   npm run build  # Build for production"
echo ""
echo "📱 The app will be available at: http://localhost:3000"
echo ""
echo "📋 Hackathon deliverables:"
echo "   • Landing page: http://localhost:3000"
echo "   • Demo: http://localhost:3000/app"
echo "   • Canvas: http://localhost:3000/canvas"
echo "   • One Pager: http://localhost:3000/one-pager"
echo "   • Roadmap: http://localhost:3000/roadmap"
echo "   • Team: http://localhost:3000/equipo"
echo ""
echo "🌍 Happy coding for a sustainable future! 🌱"