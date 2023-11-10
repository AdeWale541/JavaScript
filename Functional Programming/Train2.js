/* Window object is made up of tabs, and you usually have more than one Window open. 
The titles of each open site in each Window object is held in an array. 
After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open.
Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.

The code below shows an implementation of this functionality with functions for tabOpen(), tabClose(), and join(). 
The array tabs is part of the Window object that stores the name of the open pages.
*/
// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function() {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function(index) {
  
    // Only change code below this line
  
    const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
    // Only change code above this line
  
    return this;
   };
  
  // Let's create three browser windows
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);




/*let videoWindow= ['Netflix', 'YouTube', 'Vimeo', 'Vine'];

const index= 2;
    const tabsBeforeIndex = videoWindow.splice(0, index); // Get the tabs before the tab
    console.log(videoWindow);
    const tabsAfterIndex = videoWindow.splice(1); // Get the tabs after the tab
  
    let finalWindow = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  

console.log(finalWindow);

    // Only change code above this line*/
  