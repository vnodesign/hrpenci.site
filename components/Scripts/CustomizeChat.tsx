import Script from 'next/script'

export function CustomizeChat() {
  return (
    <>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <Script
        id="fb-chat"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "102793352173146");
            chatbox.setAttribute("attribution", "biz_inbox");
            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v15.0'
              });
            };
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `,
        }}
      />
    </>
  )
}
