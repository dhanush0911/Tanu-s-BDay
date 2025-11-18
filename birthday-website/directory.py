from pathlib import Path

# Define the project root directory
project_root = Path('birthday-website')

# Define the directory structure
directories = [
    'src/components',
    'src/utils'
]

# Define the files to create (path: initial content or empty string)
files = {
    'src/components/FloatingHearts.jsx': '',
    'src/components/FloatingHearts.css': '',
    'src/components/Section1.jsx': '',
    'src/components/Section1.css': '',
    'src/components/Section2.jsx': '',
    'src/components/Section2.css': '',
    'src/components/Section3.jsx': '',
    'src/components/Section3.css': '',
    'src/components/Section4.jsx': '',
    'src/components/Section4.css': '',
    'src/components/Section5.jsx': '',
    'src/components/Section5.css': '',
    'src/components/Section6.jsx': '',
    'src/components/Section6.css': '',
    'src/components/Section7.jsx': '',
    'src/components/Section7.css': '',
    'src/utils/celebrationEffects.js': '',
    'src/BirthdayWebsite.jsx': '',
    'src/BirthdayWebsite.css': ''
}

# Create directories
for directory in directories:
    dir_path = project_root / directory
    dir_path.mkdir(parents=True, exist_ok=True)
    print(f"✓ Directory created/verified: {dir_path}")

# Create files only if they don't exist
for file_path, content in files.items():
    full_path = project_root / file_path
    if not full_path.exists():
        full_path.write_text(content)
        print(f"✓ File created: {full_path}")
    else:
        print(f"⊘ File already exists (skipped): {full_path}")

print("\n✨ Directory structure setup complete!")
