@echo off

echo Building the project...
call npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful!
    echo 📦 Built files are in the 'dist' directory
    echo 🚀 You can now deploy to GitHub Pages by pushing to main branch
    echo    or run 'npm run deploy' for manual deployment
) else (
    echo ❌ Build failed!
    exit /b 1
)
