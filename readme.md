# GoGuardian Bypass

## A successful attempt to bypass GoGuardian.

GoGuardian is a pretty flawed piece of software. It has been bypassed many times in the past, however all of those bypasses lead up to this. A working GoGuardian bypass that runs completely on the client.
(Well, CORS is a thing, so it's not perfect, that's why the website in this repo has a compatibility mode checkbox, which uses google translate)

*This bypass is a sole proof-of-concept showing just how flawed GoGuardian is. It's literally the most incompetent piece of paid software I may have ever seen.
Not only can it be bypassed using a few lines of code, but it can also be outright stopped from sending data to the teachers to track what you're doing, by using AdGuard DNS (94.140.14.14).
This is a POC showing how flawed GoGuardian is for the price, and how other, much less expensive, if not, free, options are much better.* (from the website)
COMPATIBILITY MODE WAS FIXED BY GOOGLE, SOWWY :rage3:
## My Own Modification

Just to clarify this is the source that i found out this is possible and added my own moddification
https://github.com/ech0devv/GoGuardian-Bypass

### Website Verison:

![Website Looks](https://github.com/GamerVerse722/GoGuardian-bypass/blob/main/WebView.png?raw=true)

Website: https://goguardian-bypass.gamerverses.repl.co

### Bookmark Version V1.00 (Copy this code and put it a bookmark):

![Bookmark Looks]()

```Javascript
javascript:req = new XMLHttpRequest();req.open('GET', 'https://raw.githubusercontent.com/GamerVerse722/GoGuardian-Bypass/main/assets/js/request.js');req.onload = function() {	eval(this.responseText + 'codeRunner();');};req.send();
```

## What's the code for it?


Here's a very basic example of how it works:

```html
<!DOCTYPE html>
<html>
  <body>
    <iframe src='YOUR URL'></iframe>
  </body>
</html>
```
