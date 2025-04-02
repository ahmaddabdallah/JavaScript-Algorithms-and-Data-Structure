@echo off
setlocal enabledelayedexpansion

REM Loop to create folders from #102 to #114
for /L %%i in (1,1,80) do (
    REM Pad the number with a leading zero if it's a single or double digit
    set "num=0%%i"
    set "num=!num:~-3!"
    mkdir "!num!"
)

echo Folders from #01 to #80 have been created in the current directory.
pause