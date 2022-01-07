---
title: Gnome
bookCollapseSection: true
weight: 620
---
<!-- vim-markdown-toc GFM -->

* [Disable desktop icons](#disable-desktop-icons)
* [Change the start button](#change-the-start-button)
* [Select a specific pixmap](#select-a-specific-pixmap)
* [Change gtk theme (2.0)](#change-gtk-theme-20)

<!-- vim-markdown-toc -->

-----------

### Disable desktop icons

With `gconf-editor`, go under apps->nautilus->desktop and uncheck every unwanted icon

### Change the start button

* run gconf-editor
* navigate to /app/panel/objects
* find a object_x with the `object_type=menu-object`
* tick up `use_custom_icon 4`
* change `custom_icon` value to the image path.

### Select a specific pixmap

Edit `.gtkrc` or `.gtkrc-2.0` and insert `pixmap_path = "/path/to/the/pixmap/directory/"` at the beginning of the file

### Change gtk theme (2.0)

Theme must be in /usr/share/themes or under ~/.themes/ . Edit `.gtkrc` or/and `.gtkrc-2.0` adding:

```cfg
gtk-theme-name = “theme_name”
```

for the icon theme (it must be under ~/.icons or in /usr/share/icons):

```cfg
gtk-icon-theme-name = “name_theme_directory”
```

for the mouse pointer theme

```cfg
gtk-cursor-theme-name = “theme_name”
```
