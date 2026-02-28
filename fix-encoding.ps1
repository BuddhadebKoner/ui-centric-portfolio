$path = "x:\ui-centric-portfolio\data\blogs.ts"
$text = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
$moj_em  = [string][char]0x00E2 + [string][char]0x20AC + [string][char]0x201D
$moj_rsq = [string][char]0x00E2 + [string][char]0x20AC + [string][char]0x2122
$moj_lsq = [string][char]0x00E2 + [string][char]0x20AC + [string][char]0x02DC
$moj_ldq = [string][char]0x00E2 + [string][char]0x20AC + [string][char]0x0153
$em   = [string][char]0x2014
$rsq  = [string][char]0x2019
$lsq  = [string][char]0x2018
$ldq  = [string][char]0x201C
$before = ($text.Split($moj_em)).Count - 1
$text = $text.Replace($moj_em,  $em)
$text = $text.Replace($moj_rsq, $rsq)
$text = $text.Replace($moj_lsq, $lsq)
$text = $text.Replace($moj_ldq, $ldq)
$after = ($text.Split($moj_em)).Count - 1
[System.IO.File]::WriteAllText($path, $text, [System.Text.Encoding]::UTF8)
Write-Host "Fixed $before em-dash instances. Remaining: $after"
