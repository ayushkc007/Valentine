# Valentine Popup Page

A single-page Valentine prompt with a playful “Nope” button that runs away and a reveal card when “Yes” is clicked.

## How to Use
Open `index.html` in your browser.

If you want to customize the name and date details, add query parameters to the URL.

## Query Parameters
All parameters are optional. If omitted, defaults are used.

- `name` — Name to appear before the question.
- `date` — Date shown in the reveal card.
- `time` — Time shown in the reveal card.
- `location` — Location shown in the reveal card.

Example:

```
file:///Users/ayushkc/Desktop/Valentines%20day/index.html?name=Queen&date=February%2014th&time=7:00%20PM&location=To%20be%20decided
```

If your browser ignores query params on `file://` URLs, use the hash version:

```
file:///Users/ayushkc/Desktop/Valentines%20day/index.html#name=Queen&date=February%2014th&time=7:00%20PM&location=To%20be%20decided
```

## Behavior
- Hovering or approaching the “Nope” button makes it move.
- Clicking “Yes” reveals the date details card.

## Files
- `index.html` — All HTML, CSS, and JS in one file.
- `README.md` — This guide.
