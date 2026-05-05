import random
import tkinter as tk
from tkinter import ttk

# lists
happy_activities = ["jump rope", "appreciate nature", "listen to music"]
bored_activities = ["go on a walk", "play a game", "clean your room"]
sad_activities = ["watch a movie", "take a nap", "call a friend"]

idk_activities = happy_activities + bored_activities + sad_activities

# function
def get_activity(mood):
    if mood == "happy":
        return random.choice(happy_activities)
    elif mood == "bored":
        return random.choice(bored_activities)
    elif mood == "sad":
        return random.choice(sad_activities)
    else:
        return random.choice(idk_activities)

# when mood is chosen
def choose_mood(mood):
    activity = get_activity(mood)
    result_label.config(text=activity)

    # hide menu frame
    menu_frame.pack_forget()

    # show result frame (centered)
    result_frame.pack(expand=True)

# back button
def go_back():
    result_frame.pack_forget()
    menu_frame.pack()

# window
root = tk.Tk()
root.geometry("400x350")

# MENU FRAME
menu_frame = tk.Frame(root)
menu_frame.pack()

title = tk.Label(menu_frame, text="Activity Generator", font=("Comic Sans MS", 18))
title.pack(pady=10)

ascii_art = tk.Label(menu_frame, text="""
  (\_/)
  (•_•)
  / >🍪
""", font=("Comic Sans MS", 12))
ascii_art.pack()

instruction = tk.Label(menu_frame, text="Pick a mood!", font=("Comic Sans MS", 14))
instruction.pack(pady=10)

ttk.Button(menu_frame, text="Happy", command=lambda: choose_mood("happy")).pack(pady=5, ipadx=10, ipady=5)
ttk.Button(menu_frame, text="Bored", command=lambda: choose_mood("bored")).pack(pady=5, ipadx=10, ipady=5)
ttk.Button(menu_frame, text="Sad", command=lambda: choose_mood("sad")).pack(pady=5, ipadx=10, ipady=5)
ttk.Button(menu_frame, text="IDK", command=lambda: choose_mood("idk")).pack(pady=5, ipadx=10, ipady=5)

# RESULT FRAME
result_frame = tk.Frame(root)

result_label = tk.Label(result_frame, text="", font=("Comic Sans MS", 16))
result_label.pack(pady=20)

back_button = ttk.Button(result_frame, text="Back", command=go_back)
back_button.pack(ipadx=10, ipady=5)

# run app
root.mainloop()
