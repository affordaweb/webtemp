@echo off
cd /d "C:\Users\affordaweb\AffordaWeb Net\webtemp"
echo Staging all changes...
git add -A
echo Committing...
git commit -m "fix: remove duplicate Home component causing build error; add new pages, SEO keywords, updated logo"
echo Pushing to GitHub...
git push
echo.
echo Done! Check Vercel in ~2 minutes: https://vercel.com/affordaweb/webtemp
pause
