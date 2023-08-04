importScripts('uv.bundle.js');
importScripts('uv.config.js');
importScripts(__uv$config.sw || 'uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
  event.respondWith(handleFetchEvent(event));
});

async function handleFetchEvent(event) {
  const response = await sw.fetch(event);

  if (response.ok && response.headers.get('content-type').includes('text/html')) {
    const modifiedResponse = await modifyPageContent(response.clone());
    return modifiedResponse;
  }

  return response;
}

async function modifyPageContent(response) {
  const text = await response.text();

  // Modify the HTML to inject the ad-blocking script and the improved galaxy-themed JavaScript GUI with pre-installed scripts
  const modifiedText = `
    ${text}
    <script>
    
      function blockAds() {
        // Remove specific ad elements using CSS
        const adSelectors = [
          '#ad',
          '#ads',
          '#ad_header',
          '#ad_footer',
          '#ad_wrapper',
          '#adBlock',
          '#appliBnr',
          '#ad_cloud_overlay_space',
          '#header_ad',
          '#footer_ad',
          '#cwnf_cocolog_sp-hbnr',
          '#pr_near_restaurant',
          '#riAfPtsWrap',
          '#FnYahooImArea',
          '#bottomAdBannerArea',
          '.ad',
          '.ad2',
          '.ads',
          '.ad_header',
          '.ad_footer',
          '.maist',
          '.tdftad',
          '.headerBnrArea',
          '.subAdBannerArea',
          '._naver_ad_area',
          'div[id^="y_gc_div"]',
          'div[id^="reveal-ad"]',
          'div[id^="nend_adspace"]',
          'div[id^="gads"]',
          'div[id^="google_afc"]',
          'div[id^="imobile_adspotdiv"]',
          'div[id^="smpBanner"]',
          'div[class^="ad_frame"]',
          'div[class^="adstir_rtb_div"]',
          'div[class^="ns-6mww1-e-5 body"]',
          'div[id^="imobile_adspot"]',
          'div[class^="FTAdBanner"]',
          'div[class^="pr_area"]',
          'div[class^="microad"]',
          'div[class^="ad_frame"]',
          'div[class^="adsense"]',
          'div[class$="adBlock"]',
          'iframe[id^="google_ads"]',
          'iframe[name^="AD"]',
          'iframe[src^="http://rcm-jp.amazon.co.jp/"]',
          'iframe[src^="http://ad.jp.ap.valuecommerce.com/"]',
          'iframe[id$="NinjaAd"]',
          'a[href^="http://clcount.com/papyless/"]',
          'a[href^="http://sp.trax-ad.jp/"]',
          'a[href^="http://ad.maist.jp/"]',
          'a[href^="http://red.st-hatena.com/go"]',
          'span[class^="iPhoneAd"]',
          'ul[class="tdftad"]',
          'nav[class="manga_banner"]'
        ];

        adSelectors.forEach((selector) => {
          const elements = document.querySelectorAll(selector);
          elements.forEach((element) => {
            if (element.parentNode) {
              element.parentNode.removeChild(element);
            }
          });
        });

        // Hide ad containers using CSS
        const adContainers = [
          '.posBlogIM',
          '.interestMatchWrap',
          '#banner-top',
          '#banner-side',
          '#pub-header',
          '#pub-droite',
          '#crec',
          '#frec',
          '#myBanner',
          '#AndroidApp',
          'div:regex(id,nend_adspace_)',
          '#pr_near_restaurant',
          '#topbanner',
          'div[class="sidebanner"]',
          'div[class="banner_468"]',
          'div.adlantis_sp_sticky_container',
          '#adingoFluct2_overlay',
          'div[id="google_image_div"]',
          'img[class="img_ad"]',
          'img[alt class="img_ad"]',
          'div[class^="koukoku"]'
        ];

        adContainers.forEach((selector) => {
          const elements = document.querySelectorAll(selector);
          elements.forEach((element) => {
            element.style.display = 'none';
            if (element.parentNode) {
              element.parentNode.removeChild(element);
            }
          });
        });
      }

      blockAds();
    </script>


    <div id="galaxy-menu" style="position: fixed; top: 20px; right: 20px; z-index: 9999;">
      <button
        id="menu-button"
        style="background: linear-gradient(purple, navy); color: white; border: none; border-radius: 50%; width: 40px; height: 40px; padding: 0; display: flex; justify-content: center; align-items: center; cursor: move;"
      >
        <span style="font-size: 18px; font-weight: bold;">TN</span>
      </button>
      <div
        id="menu-content"
        style="display: none; background: linear-gradient(navy, purple); color: white; border: none; border-radius: 10px; padding: 10px; margin-top: 10px;"
      >
        <div style="background: linear-gradient(navy, purple); padding: 10px; border-radius: 5px; margin-bottom: 10px;">
          <textarea
            id="js-code"
            style="width: 100%; height: 100px; color: white; background-color: transparent; border: none; resize: vertical;"
          ></textarea>
        </div>
        <button
          onclick="executeJavaScript()"
          style="background: linear-gradient(navy, purple); color: white; border: none; padding: 5px 10px; cursor: pointer;"
        >
          Run JavaScript
        </button>
        <div style="margin-top: 10px;">
          <button
            onclick="executePreInstalledScript('eruda')"
            style="background: linear-gradient(purple, navy); color: white; border: none; padding: 5px 10px; margin-right: 5px; cursor: pointer;"
          >
            Eruda
          </button>
          <button
            onclick="executePreInstalledScript('GoogleTabCloak')"
            style="background: linear-gradient(purple, navy); color: white; border: none; padding: 5px 10px; margin-right: 5px; cursor: pointer;"
          >
            Google Tab Cloak
          </button>
          <!-- Add more pre-installed scripts buttons here -->
        </div>
        <button
          onclick="startBlockElementMode();"
          style="background: linear-gradient(purple, navy); color: white; border: none; padding: 5px 10px; margin-top: 10px; cursor: pointer;"
        >
          Block Element
        </button>
        <button
          id="exit-button"
          onclick="showButton()"
          style="background: linear-gradient(purple, navy); color: white; border: none; padding: 5px 10px; margin-top: 10px; cursor: pointer;"
        >
          Exit
        </button>
      </div>
    </div>
    <style>
      #galaxy-menu {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
      }
      #menu-button {
        background: linear-gradient(purple, navy);
        color: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: move;
      }
      #menu-content {
        display: none;
        background: linear-gradient(navy, purple);
        color: white;
        border: none;
        border-radius: 10px;
        padding: 10px;
        margin-top: 10px;
      }
      #menu-button:active {
        cursor: grabbing;
      }
    </style>
    <script>
    function putButtonOnTop() {
      var button = document.getElementById('menu-button');
      var menu = document.getElementById('menu-content');
      button.style.zIndex = 10000;
      menu.style.zIndex = 10000;
      button.style.position = "fixed";
      button.style.top = "10px"; // Adjust the top position as needed
      button.style.right = "10px"; // Adjust the right position as needed
      menu.style.position = "fixed";
      menu.style.top = "50px"; // Adjust the top position as needed
      menu.style.right = "10px"; // Adjust the right position as needed
    }
    
    });
    
    </script>
   
    <script>


      var menuButton = document.getElementById('menu-button');
      var menuContent = document.getElementById('menu-content');
      var exitButton = document.getElementById('exit-button');
      var isDragging = false;
      var isMenuOpen = false;
      var initialButtonPosition = { x: 0, y: 0 };
      var offset = { x: 0, y: 0 };

      menuButton.addEventListener('mousedown', function (e) {
        isDragging = true;
        offset.x = e.clientX - menuButton.getBoundingClientRect().left;
        offset.y = e.clientY - menuButton.getBoundingClientRect().top;
        initialButtonPosition.x = e.clientX - offset.x;
        initialButtonPosition.y = e.clientY - offset.y;
      });

      document.addEventListener('mouseup', function (e) {
        isDragging = false;
        if (isMenuOpen) {
          menuContent.style.display = 'block';
        } else {
          menuContent.style.display = 'none';
        }
      });

      document.addEventListener('mousemove', function (e) {
        if (!isDragging) return;
        var finalPositionX = e.clientX - initialButtonPosition.x;
        var finalPositionY = e.clientY - initialButtonPosition.y;
        offset.x = e.clientX - finalPositionX;
        offset.y = e.clientY - finalPositionY;
        menuButton.style.transform = \`translate(\${finalPositionX}px, \${finalPositionY}px)\`;
        if (isMenuOpen) {
          menuContent.style.display = 'none';
          isMenuOpen = false;
        }
      });

      menuButton.addEventListener('click', function () {
        menuContent.style.display =
          menuContent.style.display === 'none' ? 'block' : 'none';
        isMenuOpen = !isMenuOpen;
        menuButton.style.display = 'none';
      });

      function executeJavaScript() {
        var jsCode = document.getElementById('js-code').value;
        try {
          eval(jsCode);
        } catch (error) {
          console.error('Error executing JavaScript:', error);
        }
      }

      function executePreInstalledScript(scriptName) {
        var script = document.createElement('script');
        script.src = \`https://cdn.jsdelivr.net/npm/\${scriptName}@latest\`;
        document.body.appendChild(script);
      }

      function showButton() {
        menuButton.style.display = 'flex';
        menuContent.style.display = 'none';
        isMenuOpen = false;
      }

      

      function startBlockElementMode() {
        var selectedElement = null;
        var blockedElements = JSON.parse(localStorage.getItem('blockedElements')) || [];
        var undoStack = [];
        var redoStack = [];
      
        document.querySelectorAll('*').forEach(function (element) {
          element.addEventListener('click', function (event) {
            event.stopPropagation();
            event.preventDefault();
      
            if (selectedElement === element) {
              clearSelection();
            } else {
              clearSelection();
              selectElement(element);
            }
          });
        });
      
        function selectElement(element) {
          selectedElement = element;
          selectedElement.style.outline = '2px dashed red';
          var elementCode = element.outerHTML.replace(/"/g, "'");
          document.getElementById('js-code').value = elementCode;
          showButton();
      
          document.addEventListener('keydown', handleKeyDown);
        }
      
        function clearSelection() {
          if (selectedElement) {
            selectedElement.style.outline = ''; // Remove the outline
            selectedElement = null;
            document.getElementById('js-code').value = '';
            hideButton();
            document.removeEventListener('keydown', handleKeyDown);
          }
           // Remove outline from all elements
      var elements = document.querySelectorAll('*');
       elements.forEach(function (element) {
        element.style.outline = '';
          });
        }
      
        function handleKeyDown(event) {
          if (event.key === 'Escape') {
            clearSelection();
          } else if (event.ctrlKey && event.key === 'z') {
            event.preventDefault();
            event.stopPropagation();
            undoBlock();
          } else if (event.ctrlKey && event.key === 'y') {
            event.preventDefault();
            event.stopPropagation();
            redoBlock();
          } else if (event.ctrlKey && event.key === 'a') {
            event.preventDefault();
            event.stopPropagation();
            selectAllElements();
          } else if (event.key === 'Backspace') {
            if (selectedElement.tagName.toLowerCase() !== 'input' && selectedElement.tagName.toLowerCase() !== 'textarea') {
              event.preventDefault();
              event.stopPropagation();
              blockElement(selectedElement);
              clearSelection();
            }
          }
        }

        function blockElement(element) {
          blockedElements.push({
            html: element.outerHTML,
            display: element.style.display
          });
          element.style.display = 'none'; // Hide the blocked element
          undoStack.push(element);
          saveBlockedElements();
        }
      
        function undoBlock() {
          if (undoStack.length > 0) {
            var lastBlockedElement = undoStack.pop();
            var lastBlockedState = blockedElements.pop();
      
            lastBlockedElement.style.display = lastBlockedState.display; // Restore the element's display
            redoStack.push(lastBlockedElement);
            saveBlockedElements();
          }
        }
      
        function redoBlock() {
          if (redoStack.length > 0) {
            var nextBlockedElement = redoStack.pop();
            var nextBlockedState = blockedElements.find(function (state) {
              return state.html === nextBlockedElement.outerHTML;
            });
      
            nextBlockedElement.style.display = 'none';
            blockedElements.push(nextBlockedState);
            undoStack.push(nextBlockedElement);
            saveBlockedElements();
          }
        }
      
        function selectAllElements() {
          var allElements = Array.from(document.querySelectorAll('*'));
          allElements.forEach(function (element) {
            element.style.outline = '2px dashed red';
          });
        }

        function saveBlockedElements() {
          localStorage.setItem('blockedElements', JSON.stringify(blockedElements));
        }
      
        alert('Block Element Mode enabled. Click on an element to select it. Press Esc to clear selection. Press Ctrl+Z to undo block. Press Ctrl+Y to redo block. Press Ctrl+A to select all elements.');
      }
      
      
      
      
      
    </script>
  `;

  const modifiedResponse = new Response(modifiedText, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  });

  return modifiedResponse;
}
