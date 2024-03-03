// script.js
// $(document).ready(function() {
//     var tabs = [];
//     var activeTabId = 0; // Initialize active tab ID
//     // Create new tab
//     $('#add-tab-btn').click(function() {
//         var tabId = tabs.length;
//         var tabName = 'Tab ' + (tabId + 1);
        
//         // Create tab element
//         var tabListItem = $('<li><button class="tab-btn" data-id="' + tabId + '">' + tabName + '</button><button class="close-btn" data-id="' + tabId + '">x</button></li>');
//         $('.tab-list').append(tabListItem);
        
//         // Create tab content
//         var tabContent = $('<div class="tab" id="tab' + tabId + '"><input type="text" class="url-input" placeholder="Enter URL"><button class="go-btn">Go</button><iframe class="content-iframe"></iframe></div>');
//         $('.tab-content').append(tabContent);
        
//         tabs.push({ name: tabName, url: '' });
//         switchTab(tabId);
//     });
    
//     // Close tab
//     $(document).on('click', '.close-btn', function() {
//         var tabId = $(this).data('id');
//         tabs.splice(tabId, 1);
//         $('.tab').eq(tabId).remove();
//         $('.tab-btn').eq(tabId).parent().remove();
//         refreshTabs();
//     });
    
//     // Switch tab
//     $(document).on('click', '.tab-btn', function() {
//         var tabId = $(this).data('id');
//         switchTab(tabId);
//     });
    
//     // Load URL in iframe
//     $(document).on('click', '.go-btn', function() {
//         var tabId = $(this).closest('.tab').index();
//         var url = $(this).prev('.url-input').val();
        
//         // Check if protocol is missing and prepend if necessary
//         if (!url.startsWith("http://") && !url.startsWith("https://")) {
//             url = "http://" + url; // Default to HTTP if protocol is missing
//         }
        
//         tabs[tabId].url = url;
//         $('#tab' + tabId + ' .content-iframe').attr('src', url);
//     });
    
//     function switchTab(tabId) {
//         $('.tab').hide();
//         $('.tab-btn').removeClass('active');
//         $('#tab' + tabId).show();
//         $('.tab-btn[data-id="' + tabId + '"]').addClass('active');
//         refreshTabs();
//     }
//      // Duplicate Tab
//     // Duplicate Tab
//     $(document).on('click', '.duplicate-btn', function() {
//         var tabId = $(this).data('id');
//         var originalTab = tabs[tabId];
        
//         // Create a copy of the original tab
//         var copiedTab = {
//             name: originalTab.name + ' (Copy)',
//             url: originalTab.url
//         };
        
//         // Add the copied tab to the tabs array
//         tabs.splice(tabId + 1, 0, copiedTab);
        
//         // Refresh the tab list to reflect the changes
//         refreshTabs();
//     });
  
//     function refreshTabs() {
//         $('.tab-btn').each(function(index) {
//             $(this).data('id', index);
//             $(this).text(tabs[index].name);
//         });
//     }
//      // Event listener for Enter key in URL input
//      $(document).on('keypress', '.url-input', function(event) {
//         if (event.which === 13) { // Enter key
//             const url = $(this).val();
//             tabs[activeTabId].url = url; // Use activeTabId instead of tabId
//             $('#tab' + activeTabId + ' .content-iframe').attr('src', url);
//         }
//     });
// });
// $(document).ready(function() {
//     var tabs = [];
//     var activeTabId = 0; // Initialize active tab ID
    
//     // Create new tab
//     $('#add-tab-btn').click(function() {
//         var tabId = tabs.length;
//         var tabName = 'Tab ' + (tabId + 1);
        
//         // Create tab element
//         var tabListItem = $('<li><button class="tab-btn" data-id="' + tabId + '">' + tabName + '</button><button class="close-btn" data-id="' + tabId + '">x</button></li>');
//         $('.tab-list').append(tabListItem);
        
//         // Create tab content
//         var tabContent = $('<div class="tab" id="tab' + tabId + '"><input type="text" class="url-input" placeholder="Enter URL"><button class="go-btn">Go</button><iframe class="content-iframe"></iframe></div>');
//         $('.tab-content').append(tabContent);
        
//         tabs.push({ name: tabName, url: '' });
//         switchTab(tabId);
//     });
    

// $(document).on('click', '.close-btn', function() {
//     var tabId = $(this).data('id');
    
//     // Remove the tab from the tabs array
//     var removedTab = tabs.splice(tabId, 1);
    
//     // Remove the corresponding tab elements
//     $('.tab').eq(tabId).remove();
//     $('.tab-btn').eq(tabId).parent().remove();

//     // Update data-id attributes and reassign event handlers
//     $('.tab-btn').each(function(index) {
//         $(this).data('id', index);
//     });

//     // Update activeTabId
//     if (tabs.length > 0) {
//         if (activeTabId === tabId) {
//             if (tabId === tabs.length) {
//                 activeTabId = tabId - 1; // If closing the last tab, switch to the previous tab
//             }
//             switchTab(activeTabId);
//         } else if (activeTabId > tabId) {
//             activeTabId--; // Adjust activeTabId if it's after the closed tab
//         }
//         // No need to adjust activeTabId if it's before the closed tab
//     } else {
//         activeTabId = -1; // Reset activeTabId when all tabs are closed
//     }
    
//     refreshTabs();
// });




//     // Switch tab
//     $(document).on('click', '.tab-btn', function() {
//         var tabId = $(this).data('id');
//         switchTab(tabId);
//     });
    
//     // Load URL in iframe
//     $(document).on('click', '.go-btn', function() {
//         var tabId = $(this).closest('.tab').index();
//         var url = $(this).prev('.url-input').val();
        
//         // Check if protocol is missing and prepend if necessary
//         if (!url.startsWith("http://") && !url.startsWith("https://")) {
//             url = "http://" + url; // Default to HTTP if protocol is missing
//         }
        
//         tabs[tabId].url = url;
//         $('#tab' + tabId + ' .content-iframe').attr('src', url);
//     });
    
//     // Event listener for Enter key in URL input
//     $(document).on('keypress', '.url-input', function(event) {
//         if (event.which === 13) { // Enter key
//             const url = $(this).val();
//             tabs[activeTabId].url = url; // Use activeTabId instead of tabId
//             $('#tab' + activeTabId + ' .content-iframe').attr('src', url);
//         }
//     });
    
//     function switchTab(tabId) {
//         activeTabId = tabId; // Update activeTabId
//         $('.tab').hide();
//         $('.tab-btn').removeClass('active');
//         $('#tab' + tabId).show();
//         $('.tab-btn[data-id="' + tabId + '"]').addClass('active');
//         refreshTabs();
//     }
    
//     function refreshTabs() {
//         $('.tab-btn').each(function(index) {
//             $(this).data('id', index);
//             $(this).text(tabs[index].name);
//         });
//     }
// });
// $(document).ready(function() {
//     var tabs = {};
//     var activeTabId = 0; // Initialize active tab ID
    
//     // Create new tab
//     $('#add-tab-btn').click(function() {
//         var tabId = Object.keys(tabs).length;
//         var tabName = 'Tab ' + (tabId + 1);
        
//         // Create tab element
//         var tabListItem = $('<li><button class="tab-btn" data-id="' + tabId + '">' + tabName + '</button><button class="close-btn" data-id="' + tabId + '">x</button></li>');
//         $('.tab-list').append(tabListItem);
        
//         // Create tab content
//         var tabContent = $('<div class="tab" id="tab' + tabId + '"><input type="text" class="url-input" placeholder="Enter URL"><button class="go-btn">Go</button><iframe class="content-iframe"></iframe></div>');
//         $('.tab-content').append(tabContent);
        
//         tabs[tabId] = { name: tabName, url: '' };
//         switchTab(tabId);
//     });
    
//     // Close tab
//     $(document).on('click', '.close-btn', function() {
//         var tabId = $(this).data('id');
        
//         // Remove the tab from the tabs object
//         delete tabs[tabId];
        
//         // Remove the corresponding tab elements
//         $('#tab' + tabId).remove();
//         $('.tab-btn[data-id="' + tabId + '"]').parent().remove();
        
//         // Update activeTabId
//         if (activeTabId === tabId) {
//             var tabIds = Object.keys(tabs);
//             if (tabIds.length > 0) {
//                 activeTabId = Math.min(...tabIds);
//                 switchTab(activeTabId);
//             } else {
//                 activeTabId = -1;
//             }
//         }
        
//         refreshTabs();
//     });
    
//     // Switch tab
//     $(document).on('click', '.tab-btn', function() {
//         var tabId = $(this).data('id');
//         switchTab(tabId);
//     });
    
//     // Load URL in iframe
//     $(document).on('click', '.go-btn', function() {
//         var tabId = $(this).closest('.tab').attr('id').substring(3); // Extract tabId from tab's id
//         var url = $(this).prev('.url-input').val();
        
//         // Check if protocol is missing and prepend if necessary
//         if (!url.startsWith("http://") && !url.startsWith("https://")) {
//             url = "http://" + url; // Default to HTTP if protocol is missing
//         }
        
//         tabs[tabId].url = url;
//         $('#tab' + tabId + ' .content-iframe').attr('src', url);
//     });
    
//     // Event listener for Enter key in URL input
//     $(document).on('keypress', '.url-input', function(event) {
//         if (event.which === 13) { // Enter key
//             var tabId = $(this).closest('.tab').attr('id').substring(3); // Extract tabId from tab's id
//             const url = $(this).val();
//             tabs[tabId].url = url; // Update URL in tabs object
//             $('#tab' + tabId + ' .content-iframe').attr('src', url);
//         }
//     });
    
//     function switchTab(tabId) {
//         activeTabId = tabId; // Update activeTabId
//         $('.tab').hide();
//         $('.tab-btn').removeClass('active');
//         $('#tab' + tabId).show();
//         $('.tab-btn[data-id="' + tabId + '"]').addClass('active');
//     }
    
//     function refreshTabs() {
//         $('.tab-btn').each(function(index) {
//             $(this).data('id', index);
//             var tabId = $(this).data('id');
//             $(this).text(tabs[tabId].name);
//         });
//     }
// });

// Observer design pattern
$(document).ready(function() {
    var tabs = {};
    var activeTabId = 0; // Initialize active tab ID
    var lastTabId = 0; // Initialize last used tab ID
    
    // Create new tab
    $('#add-tab-btn').click(function() {
        var tabId = lastTabId + 1;
        var tabName = 'Tab';
        
        // Create tab element
        var tabListItem = $('<li><button class="tab-btn" data-id="' + tabId + '">' + tabName + '</button><button class="close-btn" data-id="' + tabId + '">x</button></li>');
        $('.tab-list').append(tabListItem);
        
        // Create tab content
        var tabContent = $('<div class="tab" id="tab' + tabId + '"><input type="text" class="url-input" placeholder="Enter URL"><button class="go-btn">Go</button><iframe class="content-iframe"></iframe></div>');
        $('.tab-content').append(tabContent);
        
        tabs[tabId] = { name: tabName, url: '' };
        lastTabId = tabId; // Update lastTabId
        switchTab(tabId);
    });
    
    // Close tab
    $(document).on('click', '.close-btn', function() {
        var tabId = $(this).data('id');
        
        // Remove the tab from the tabs object
        delete tabs[tabId];
        
        // Remove the corresponding tab elements
        $('#tab' + tabId).remove();
        $('.tab-btn[data-id="' + tabId + '"]').parent().remove();
        
        // Update activeTabId
        if (activeTabId === tabId) {
            var tabIds = Object.keys(tabs);
            if (tabIds.length > 0) {
                activeTabId = Math.min(...tabIds);
                switchTab(activeTabId);
            } else {
                activeTabId = -1;
            }
        }
        
        refreshTabs();
    });
    
    // Switch tab
    $(document).on('click', '.tab-btn', function() {
        var tabId = $(this).data('id');
        switchTab(tabId);
    });
    
    // Load URL in iframe
    $(document).on('click', '.go-btn', function() {
        var tabId = $(this).closest('.tab').attr('id').substring(3); // Extract tabId from tab's id
        var url = $(this).prev('.url-input').val();
        
        // Check if protocol is missing and prepend if necessary
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "http://" + url; // Default to HTTP if protocol is missing
        }
        
        tabs[tabId].url = url;
        $('#tab' + tabId + ' .content-iframe').attr('src', url);
    });
    
    // Event listener for Enter key in URL input
    $(document).on('keypress', '.url-input', function(event) {
        if (event.which === 13) { // Enter key
            var tabId = $(this).closest('.tab').attr('id').substring(3); // Extract tabId from tab's id
            const url = $(this).val();
            tabs[tabId].url = url; // Update URL in tabs object
            $('#tab' + tabId + ' .content-iframe').attr('src', url);
        }
    });
    
    function switchTab(tabId) {
        activeTabId = tabId; // Update activeTabId
        $('.tab').hide();
        $('.tab-btn').removeClass('active');
        $('#tab' + tabId).show();
        $('.tab-btn[data-id="' + tabId + '"]').addClass('active');
    }
    
    function refreshTabs() {
        // No need to update tab names
    }
});
