import tkinter as tk

# functions
def happy_clicked():
    print("Happy button pressed")
def bored_clicked():
    print("Bored button pressed")
def sad_clicked():
    print("Sad button pressed")
def idk_clicked():
    print("idk button pressed")

# window
root = tk.Tk()
root.geometry("400x300")

# title
label = tk.Label(root, text="Activity Generator!")
label.pack()

# buttons
tk.Button(root, text="happy", command=happy_clicked).pack()
tk.Button(root, text="bored", command=bored_clicked).pack()
tk.Button(root, text="sad", command=sad_clicked).pack()
tk.Button(root, text="idk", command= idk_clicked).pack()

root.mainloop()