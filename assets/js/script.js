/* ============================================================================
   GIOHOST - PREMIUM WEB HOSTING JAVASCRIPT
   ============================================================================
   
   Description: Main JavaScript file for interactive features including:
   - Header scroll effects with glassmorphism
   - FAQ accordion functionality
   - Mobile navigation menu toggle
   
   Author: Giohost Development Team
   Last Updated: 2026
   
   ============================================================================ */


/* ============================================================================
   SECTION 1: HEADER SCROLL EFFECT
   ============================================================================
   Adds/removes 'scrolled' class to header when user scrolls past 50px
   This triggers the CSS transition for a sticky header effect
   ============================================================================ */

window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    
    // Check if user has scrolled more than 50 pixels from top
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Console confirmation for successful script loading
console.log("Navigation Header Loaded Successfully!");


/* ============================================================================
   SECTION 2: FAQ ACCORDION INTERACTIVITY
   ============================================================================
   Handles expand/collapse functionality for FAQ accordion items
   - Closes other open items when a new one is clicked (accordion behavior)
   - Toggles active state on clicked item
   ============================================================================ */

// Select all accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Add click event listener to each accordion header
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // Get parent accordion item
        const item = header.parentElement;
        
        // Close all other accordion items (Optional: Single-open behavior)
        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle the active state of the clicked item
        item.classList.toggle('active');
    });
});


/* ============================================================================
   SECTION 3: MOBILE MENU TOGGLE
   ============================================================================
   Controls the mobile navigation menu visibility
   - Toggles navigation menu on/off when hamburger icon is clicked
   - Changes hamburger icon to X (close icon) when menu is open
   ============================================================================ */

// Get mobile menu toggle button and navigation links container
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

// Only add event listener if mobile menu button exists in DOM
if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        // Toggle the 'active' class to show/hide mobile menu
        navLinks.classList.toggle('active');
        
        // Change icon from hamburger bars to close X (Optional visual enhancement)
        const icon = mobileMenu.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}


/* ============================================================================
   END OF SCRIPT
   ============================================================================ */