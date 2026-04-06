@echo off
cd /d "C:\Users\affordaweb\AffordaWeb Net\webtemp"
echo Staging all changes...
git add -A
echo Committing...
git commit -m "feat: add Services, Portfolio, FAQ, Contact pages; update logo/favicon; expand SEO keywords"
echo Pushing to GitHub...
git push
echo.
echo Done! Check Vercel in ~2 minutes: https://vercel.com/affordaweb/webtemp
pause
