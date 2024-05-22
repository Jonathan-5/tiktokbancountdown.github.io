var startDate = moment.tz("2024-04-24", "America/New_York");

var endDate1 = moment.tz("2025-01-19 23:59:59", "America/New_York");
var countDownDate1 = endDate1.valueOf();

var endDate2 = moment.tz("2025-04-19 23:59:59", "America/New_York");
var countDownDate2 = endDate2.valueOf();

function updateCountdown1() {
  var now = moment().tz("America/New_York").valueOf();
  var distance = countDownDate1 - now;
  if (distance < 0) {
    clearInterval(x1);
    document.getElementById("countdownBox1").innerHTML = "• The first countdown has ended — the initial deadline has passed •";
    document.getElementById("welcomeMessage").innerHTML = "TikTok ban in progress?";
    document.getElementById("timerRow2").style.display = "none";
    document.getElementById("extensionLabel").innerHTML = "Extension timer is running";
  } else {
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown1").innerHTML = (days < 10 ? "0" : "") + days + "d " + (hours < 10 ? "0" : "") + hours + "h " + (minutes < 10 ? "0" : "") + minutes + "m " + (seconds < 10 ? "0" : "") + seconds + "s ";
  }
}

function updateCountdown2() {
  var now = moment().tz("America/New_York").valueOf();
  var distance = countDownDate2 - now;
  if (distance < 0) {
    clearInterval(x2);
    document.getElementById("countdownBox2").innerHTML = "• The extension deadline has also passed. TikTok may now be banned, depending on a sale •";
    document.getElementById("welcomeMessage").innerHTML = "TikTok ban now in effect?";
  } else {
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown2").innerHTML = (days < 10 ? "0" : "") + days + "d " + (hours < 10 ? "0" : "") + hours + "h " + (minutes < 10 ? "0" : "") + minutes + "m " + (seconds < 10 ? "0" : "") + seconds + "s ";
  }
}

function initializeCountdowns() {
  var now = moment().tz("America/New_York").valueOf();

  if (countDownDate1 - now < 0) {
    document.getElementById("countdownBox1").innerHTML = "• The first countdown has ended — the initial deadline has passed •";
    document.getElementById("welcomeMessage").innerHTML = "TikTok ban in progress?";
    document.getElementById("timerRow2").style.display = "none";
    document.getElementById("extensionLabel").innerHTML = "Extension timer is running";
  } else {
    setInterval(updateCountdown1, 1000);
  }

  if (countDownDate2 - now < 0) {
    document.getElementById("countdownBox2").innerHTML = "• The extension deadline has also passed. TikTok may now be banned, depending on a sale •";
    document.getElementById("welcomeMessage").innerHTML = "TikTok ban now in effect?";
  } else {
    setInterval(updateCountdown2, 1000);
  }
}

initializeCountdowns();

document.getElementById('nightModeToggle').addEventListener('click', function() {
  document.body.classList.toggle('night-mode');
});

function sharePage() {
  if (navigator.share) {
    navigator.share({
      title: 'TikTok Ban Countdown',
      url: window.location.href
    }).then(() => {
      console.log('Thanks for sharing!');
    }).catch((err) => {
      console.log(`Couldn't share because of`, err.message);
    });
  } else {
    alert('Your browser does not support the Web Share API');
  }
}

function shareOnFacebook() {
  const url = encodeURIComponent(window.location.href);
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  window.open(shareUrl, '_blank');
}

function shareOnTwitterX() {
  const url = encodeURIComponent(window.location.href);
  const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=Check%20out%20this%20TikTok%20ban%20countdown!`;
  window.open(shareUrl, '_blank');
}

function shareOnLinkedIn() {
  const url = encodeURIComponent(window.location.href);
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  window.open(shareUrl, '_blank');
}

function toggleContent(contentId, button) {
  const contentElements = document.querySelectorAll('.content');
  const buttons = document.querySelectorAll('.learn-more-button');

  contentElements.forEach(content => {
    if (content.id !== contentId) {
      content.style.display = 'none';
    }
  });

  buttons.forEach(btn => {
    if (btn !== button) {
      btn.classList.remove('active');
    }
  });

  const content = document.getElementById(contentId);
  if (content.style.display === 'block') {
    content.style.display = 'none';
    button.classList.remove('active');
  } else {
    content.style.display = 'block';
    button.classList.add('active');
  }
}

function copyToClipboard() {
  const code = document.querySelector('#embedCode pre code').textContent;
  navigator.clipboard.writeText(code).then(() => {
    alert('Code copied to clipboard!');
  }).catch(err => {
    alert('Failed to copy code: ' + err);
  });
}