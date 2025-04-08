Tailwind Setup:
step1: Create Angular project version 17.3.0
step2: npm install -D tailwindcss postcss autoprefixer
step3: npx tailwind init
step4: Add `content: ["./src/**/*.{html,ts}"]` in your generated tailwind.config.js
step5: Add @tailwind base; @tailwind components; @tailwind utilities; in you styles.scss
step6: ng serve
