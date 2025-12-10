# WordPress Sidebar Template

A simple Next.js template with a WordPress admin sidebar for plugin creators to mock up their plugin prototypes.

[![Live Preview](public/preview.jpeg)](https://wordpress-sidebar-template.vercel.app/)

### [View Live Preview](https://wordpress-sidebar-template.vercel.app/)

## Getting Started

```bash
bun install
bun dev
```

## Usage

Edit `app/page.tsx` to customize the sidebar and content for your plugin mockup:

```tsx
<WPSidebarItem icon="admin-generic" label="My Plugin" active open>
  <WPSidebarSubItem label="Dashboard" active />
  <WPSidebarSubItem label="Settings" />
</WPSidebarItem>
```

## Available Icons

`dashboard`, `admin-post`, `admin-media`, `admin-page`, `admin-comments`, `admin-appearance`, `admin-plugins`, `admin-users`, `admin-generic`, `bell`
