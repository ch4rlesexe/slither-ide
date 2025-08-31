# Slither IDE

A VS Code-style Python IDE built with Electron and Monaco Editor that executes Python code and displays output in real-time. I built this as a joke for a tiktok video.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/ch4rlesexe/slither-ide.git
cd slither-ide

# Install dependencies and run
cd codez
npm install
npm start
```

## What is Slither IDE?

Slither IDE is a Python DE that looks and trys to mirror VS Code (in the 1.5 hours I spent on it), but instead of a 'run' button it has a 'slither' button.

### Key Features
- **VS Code Interface** - Dark theme, Monaco editor
- **Python Execution** - Click "Slither" button to run code
- **Real-time Output** - See results in integrated terminal panel
- **Custom Functions** - `HelloWorld("print")` works as `print("Hello World")`
- **Keyboard Shortcuts** - F5 for quick execution

## "Look"

```
┌─────────────────────────────────────────────────────────────┐
│ Slither IDE                                    [□][─][×] │
├─────────────────────────────────────────────────────────────┤
│ # Welcome to Slither IDE!                                  │
│ print("Hello, World!")                                     │
│ HelloWorld("print")  # This will print "Hello World"       │
│                                                            │
│ name = "Developer"                                         │
│ print(f"Hello, {name}!")                                   │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┘
│ === Python Code Execution ===                              │
│ Hello, World!                                              │
│ Hello World                                                │
│ Hello, Developer!                                          │
│ Code executed successfully!                                │
└─────────────────────────────────────────────────────────────┘
```

## Project Structure

```
slither-ide/
├── codez/                    # Main application
│   ├── index.html           # IDE interface
│   ├── main.js              # Electron main process
│   ├── preload.js           # Security bridge
│   ├── package.json         # Dependencies
└── README.md                # This overview
```

## Technology Stack

- **Frontend:** HTML, CSS, JavaScript
- **Editor:** Monaco Editor
- **Framework:** Electron
- **Language:** Python syntax highlighting
- **Theme:** VS Code Dark Theme

## How to Use

1. **Write Python code** in the Monaco editor
2. **Click "Slither"** button (or press F5)
3. **View execution output** in the terminal panel below

### Example Code
```python
print("Hello, World!")
HelloWorld("print")  # Prints "Hello World"
HelloWorld("Charlie")  # Prints "Hello Charlie"

name = "Developer"
print(f"Hello, {name}!")
```


