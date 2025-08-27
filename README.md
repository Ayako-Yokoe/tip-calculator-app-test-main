# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

<img src="" alt="375px" width="auto" height="200">

### Links

- Solution URL: [GitHub](https://github.com/Ayako-Yokoe/tip-calculator-app-test-main)
- Live Site URL: [Vercel](https://tip-calculator-app-test-main.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vite.dev/) - Build tool
- [Vitest](https://vitest.dev/) - Testing framework

### What I learned

This project was my first experience using Vitest. I learned its syntax and methods, and gained a better understanding of testing through hands-on practice.

To see how you can add code snippets, see below:

```test.jsx
  it('should return $12.50 for Tip Amount and $62.50 for Total when bill is $100, tip is 25%, and people is 2', async () => {
    render(<App />);

    const bill = screen.getByLabelText(/bill/i);
    const tip = screen.getByText('25%');
    const people = screen.getByLabelText(/number of people/i);

    await userEvent.type(bill, '100');
    await userEvent.click(tip);
    await userEvent.type(people, '2');

    await waitFor(async () => {
      const tipAmount = await screen.findByTestId('tip-amount');
      const totalAmount = await screen.findByTestId('total-amount');
  
      expect(tipAmount).toHaveTextContent('12.50');
      expect(totalAmount).toHaveTextContent('62.50');
    });
  });
```

### Continued development

I encountered challenges with user events and their rendering timing. I plan to continue learning about these issues and explore other testing library methods to improve my skills.
