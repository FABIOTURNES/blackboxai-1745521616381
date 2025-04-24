
Built by https://www.blackbox.ai

---

```markdown
# Sorteio.com - Instagram Giveaway Management Platform

## Project Overview
Sorteio.com is an Instagram giveaway/contest management platform designed to streamline the process of managing giveaways on Instagram. With an array of user-friendly features, users can effortlessly load Instagram post comments, authenticate users, and run contests in multiple languages, all wrapped in an appealing dark/light mode interface.

## Installation
To set up the Sorteio.com platform locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/sorteio.git
   ```

2. **Install WordPress:**
   - Download and set up the latest version of WordPress from [wordpress.org](https://wordpress.org/download/).

3. **Configure the environment:**
   - Set up a MySQL database for your WordPress instance.
   - Update the `wp-config.php` file with your database credentials.

4. **Upload the theme:**
   - Place the `sorteio-theme` folder in the `/wp-content/themes/` directory.

5. **Activate the theme:**
   - Go to the WordPress admin dashboard, navigate to "Appearance" > "Themes", and activate the Sorteio theme.

6. **Install required plugins:**
   - Any additional plugins necessary for Instagram API integration should be installed through the WordPress dashboard.

## Usage
Once your WordPress site is set up with the Sorteio theme:

1. Visit your homepage to start loading Instagram comments.
2. Use the user account module to register and log in.
3. Go to the dashboard for contest management functionalities.
4. Adjust site settings as needed for language and design.

## Features
- **Instagram Post Comment Loading:** Load and manage comments from Instagram posts.
- **User Authentication System:** Registration, login, and profile management.
- **Multi-language Support:** Currently supports Portuguese and English.
- **Dark/Light Mode Toggle:** Users can switch between themes for better accessibility.
- **Responsive Design:** Optimized for mobile and desktop users.

## Dependencies
The project requires the following technologies:
- PHP 8.x
- MySQL
- WordPress for content management
- Tailwind CSS for styling
- JavaScript for interactivity

## Project Structure
Here is the structure of the project:
```
sorteio/
├── wp-content/
│   └── themes/
│       └── sorteio-theme/
│           ├── assets/
│           │   ├── css/
│           │   ├── js/
│           │   └── images/
│           ├── includes/
│           ├── templates/
│           ├── functions.php
│           └── style.css
├── public/
└── config/
```
### Important Files
- **index.html**: Main page layout and structure.
- **pricing.html**: Plan and pricing information for users.
- **styles.css**: Custom styles implementing the design rules.
- **project-plan.md**: Documentation outlining the project's key information, including implementation phases, security considerations, and maintenance plans.

## Conclusion
Sorteio.com presents a modern solution for managing Instagram giveaways, incorporating features that enhance user experience and ensure operational efficiency. Get started with the setup steps above and transform the way you handle giveaways today!
```