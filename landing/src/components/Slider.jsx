import React, { useEffect, useRef } from 'react';
import sliderBackground from '../assets/images/slider-bg1.jpg'; // Import the image
import $ from 'jquery'; // Import jQuery
import WOW from 'wow.js';


const Slider = () => {
    const headlineRef = useRef(null); // Ref for the headline

    useEffect(() => {
        // Ensure the DOM is ready before running the script
        new WOW().init();

        if (headlineRef.current) {
          // Adjust the timings to slow down the animation
          const animationDelay = 4000; // Increased delay for slower animation
          const barAnimationDelay = 6000; // Increased delay for the loading bar
          const barWaiting = barAnimationDelay - 4000;
          const lettersDelay = 100; // Increased delay between letters
          const typeLettersDelay = 250; // Slower typing animation
          const selectionDuration = 600; // Longer selection duration
          const typeAnimationDelay = selectionDuration + 1000;
          const revealDuration = 1000; // Increased reveal duration
          const revealAnimationDelay = 2000; // Slower reveal animation
    
          // jQuery initialization for the headline
          initHeadline();
    
          function initHeadline() {
            singleLetters($('.cd-headline.letters').find('b'));
            animateHeadline($('.cd-headline'));
          }
    
          function singleLetters($words) {
            $words.each(function () {
              var word = $(this);
              var letters = word.text().split('');
              const selected = word.hasClass('is-visible');
              for (let i in letters) {
                if (word.parents('.rotate-2').length > 0) {
                  letters[i] = '<em>' + letters[i] + '</em>';
                }
                letters[i] = selected ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
              }
              var newLetters = letters.join('');
              word.html(newLetters).css('opacity', 1);
            });
          }
    
          function animateHeadline($headlines) {
            var duration = animationDelay;
            $headlines.each(function () {
              var headline = $(this);
              if (headline.hasClass('loading-bar')) {
                duration = barAnimationDelay;
                setTimeout(function () {
                  headline.find('.cd-words-wrapper').addClass('is-loading');
                }, barWaiting);
              } else if (headline.hasClass('clip')) {
                var spanWrapper = headline.find('.cd-words-wrapper');
                var newWidth = spanWrapper.width() + 10;
                spanWrapper.css('width', newWidth);
              } else if (!headline.hasClass('type')) {
                var words = headline.find('.cd-words-wrapper b');
                var width = 0;
                words.each(function () {
                  var wordWidth = $(this).width();
                  if (wordWidth > width) width = wordWidth;
                });
                headline.find('.cd-words-wrapper').css('width', width);
              }
              setTimeout(function () {
                hideWord(headline.find('.is-visible').eq(0));
              }, duration);
            });
          }
    
          function hideWord($word) {
            var nextWord = takeNext($word);
            if ($word.parents('.cd-headline').hasClass('type')) {
              var parentSpan = $word.parent('.cd-words-wrapper');
              parentSpan.addClass('selected').removeClass('waiting');
              setTimeout(function () {
                parentSpan.removeClass('selected');
                $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
              }, selectionDuration);
              setTimeout(function () {
                showWord(nextWord, typeLettersDelay);
              }, typeAnimationDelay);
            } else if ($word.parents('.cd-headline').hasClass('letters')) {
              var bool = $word.children('i').length >= nextWord.children('i').length;
              hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
              showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);
            } else if ($word.parents('.cd-headline').hasClass('clip')) {
              $word.parents('.cd-words-wrapper').animate({ width: '2px' }, revealDuration, function () {
                switchWord($word, nextWord);
                showWord(nextWord);
              });
            } else if ($word.parents('.cd-headline').hasClass('loading-bar')) {
              $word.parents('.cd-words-wrapper').removeClass('is-loading');
              switchWord($word, nextWord);
              setTimeout(function () {
                hideWord(nextWord);
              }, barAnimationDelay);
              setTimeout(function () {
                $word.parents('.cd-words-wrapper').addClass('is-loading');
              }, barWaiting);
            } else {
              switchWord($word, nextWord);
              setTimeout(function () {
                hideWord(nextWord);
              }, animationDelay);
            }
          }
    
          function showWord($word, $duration) {
            if ($word.parents('.cd-headline').hasClass('type')) {
              showLetter($word.find('i').eq(0), $word, false, $duration);
              $word.addClass('is-visible').removeClass('is-hidden');
            } else if ($word.parents('.cd-headline').hasClass('clip')) {
              $word.parents('.cd-words-wrapper').animate({ 'width': $word.width() + 10 }, revealDuration, function () {
                setTimeout(function () {
                  hideWord($word);
                }, revealAnimationDelay);
              });
            }
          }
    
          function hideLetter($letter, $word, $bool, $duration) {
            $letter.removeClass('in').addClass('out');
            if (!$letter.is(':last-child')) {
              setTimeout(function () {
                hideLetter($letter.next(), $word, $bool, $duration);
              }, $duration);
            } else if ($bool) {
              setTimeout(function () {
                hideWord(takeNext($word));
              }, animationDelay);
            }
            if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
              var nextWord = takeNext($word);
              switchWord($word, nextWord);
            }
          }
    
          function showLetter($letter, $word, $bool, $duration) {
            $letter.addClass('in').removeClass('out');
            if (!$letter.is(':last-child')) {
              setTimeout(function () {
                showLetter($letter.next(), $word, $bool, $duration);
              }, $duration);
            } else {
              if ($word.parents('.cd-headline').hasClass('type')) {
                setTimeout(function () {
                  $word.parents('.cd-words-wrapper').addClass('waiting');
                }, 200);
              }
              if (!$bool) {
                setTimeout(function () {
                  hideWord($word);
                }, animationDelay);
              }
            }
          }
    
          function takeNext($word) {
            return !$word.is(':last-child') ? $word.next() : $word.parent().children().eq(0);
          }
    
          function takePrev($word) {
            return !$word.is(':first-child') ? $word.prev() : $word.parent().children().last();
          }
    
          function switchWord($oldWord, $newWord) {
            $oldWord.removeClass('is-visible').addClass('is-hidden');
            $newWord.removeClass('is-hidden').addClass('is-visible');
          }
        }
    
        return () => {
          // Cleanup jQuery when component unmounts
          $(headlineRef.current).off();
        };
      }, []);    


    return (
    <div
      className="slider_area creative minimal-2"
      id="home"
      style={{
        backgroundImage: `url(${sliderBackground})`, // Set background dynamically
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative',
        zIndex: 1,
      }}
    >      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Single Slide */}
            <div className="single_slide">
              <div className="slider_content">
                <div className="slider_text">
                  <div className="slider_text_inner">
                    <h1 className="cd-headline clip is-full-width" ref={headlineRef}>
                      <span className="cd-words-wrapper">
                        <b className="is-visible">EMILIO GAMBONE</b>
                        <b>IT ENGINEER</b>
                        {/* <b>Web DEVELOPER</b> */}
                      </span>
                    </h1>
                    <ul>
                      <li>Solutions Architect</li>
                      <li>IT Consultant</li>
                      {/* <li>Freelancer</li> */}
                    </ul>
                  </div>
                </div>

                <div
                  className="scroll-next text-center wow infinite fadeInDown"
                  data-wow-duration="2s"
                >
                  <a href="#about">
                    <i className="fa fa-angle-double-down"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="single_slider_icon">
            <div className="slider_icon_inner">
              <a href="https://github.com/emiliogambone">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/emilio-gambone-41624458/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
