# Frontend Developer Documentation

This Markdown explains you how to contribute to this project !

We really appreciate the time you took for us !

## File Architecture

Above all, the first thing to do is understanding the file architecture of the project !

```
src/
 |
 |---api/                   # All the API call functions
 |
 |---app/                   # App router of NextJS
 |
 |---components/            # All the custom components you want
 |
 |---libs/                  # External libraries and the custom modules
```

The file architecture is simple, the most important thing to understand is: how to create new Pages.

## Creating a new Page

Inside the `app/`, every subfolder will be part of the front page architecture. Create the subfolder you want and in it create a `page.tsx`, where you can put your page !

When you create a new Page divide it in sub components that can be reused in other pages.
