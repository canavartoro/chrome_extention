$(function(){

    /*chrome.notifications.getAll((items) => {
        if ( items ) {
            for (let key in items) {
                chrome.notifications.clear(key);
            }
        }
      });

    chrome.notifications.create('Reminder', {
        type: 'basic',
        iconUrl: 'icon28.png',
        title: 'Don\'t forget!',
        message: 'You have things to do. Get cracking!'        
      }, function(notificationId) { });
      
      chrome.notifications.onClicked.addListener(function( notificationId ) {
          alert('tiklandi');
        chrome.notifications.clear(notificationId, function() {});
      });*/

    //notifyMe();

    /*chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        sendData();
    });*/

    chrome.storage.sync.get('total',function(budget){
        $('#total').text(budget.total);
    })

    $('#spendAmount').click(function(){
        chrome.storage.sync.get('total',function(budget){
            var newtotal = 0;
            if (budget.total) {
                newtotal += parseInt(budget.total);
            }

            var amount = $('#amount').val();
            if(amount) {
                newtotal += parseInt(amount);
            }

            chrome.storage.sync.set({'total':newtotal});
            $('#total').text(newtotal);
            $('#amount').val('');
        })
    })
});

function sendData() {
    var url = 'bisey bisey';
    var parametros = {
                "url" : url
        };
    $.ajax({
        type: "POST",
        data: parametros,
        url: 'http://5.5.5.5/api.php?cmd=product&asin=3426652684',
        success: function(data) {
            var res = jQuery.parseJSON(data);
            //alert(data);

            var notification = webkitNotifications.createNotification(
                'icon48.png',  // icon url - can be relative
                'Hello!',  // notification title
                'Lorem ipsum...'  // notification body text
              );
              
              // Then show the notification.
              notification.show();

            alert("success");
        },
        error: function(response) {
            // alert(JSON.stringify(response));
            alert('Error:' + response.statusText);
        },
    });
}

function notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support system notifications");
    }

    /*
    interface NotificationOptions {
    actions?: NotificationAction[];
    badge?: string;
    body?: string;
    data?: any;
    dir?: NotificationDirection;
    icon?: string;
    image?: string;
    lang?: string;
    renotify?: boolean;
    requireInteraction?: boolean;
    silent?: boolean;
    tag?: string;
    timestamp?: number;
    vibrate?: VibratePattern;
}
interface NotificationAction {
    action: string;
    icon?: string;
    title: string;
}
    */
  
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var buttons = [
          {
            icon:"icon16.png",
            title:"ok"
          },
          {
            icon:"icon16.png",
            title:"oky"
          }
      ];
      var options = {
        actions: actions,
        body:"Deneme e ee e e e",
        icon:"icon48.png"
      }
      var notification = new Notification("Hi there! ssssss",{body: 'deneme',icon:"icon48.png",vibrate: [500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500]});
    }
  
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification("Hi there!");
        }
      });
    }
  
    // Finally, if the user has denied notifications and you 
    // want to be respectful there is no need to bother them any more.
  }

 