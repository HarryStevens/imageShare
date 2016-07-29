/*
 * imageShare.js
 * Copyright (c) 2016 Harry Stevens
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

( function($) {

		$.fn.imageShare = function(options) {

			return this.each(function() {

				//options
				var settings = $.extend({
					fade : 250,
					backgroundColor : '#fff',
					fontColor : '#000',
					fontFamily : 'sans-serif',
					shareText : 'Share this image:',
					facebook : 'show',
					twitter : 'show',
					linkedin : 'show',
					googleplus : 'show',
					reddit : 'show'
				}, options);

				//create unique ids for each image and sharebox so that each can be styled separately
				var unique = $(this).context.offsetTop + '-' + $(this).context.offsetLeft;
				var id = 'image-share-' + unique;
				var idPopup = 'image-share-popup-' + unique;
				$(this).attr('id', id);

				//create variables to position the popup div
				var top = $(this).context.offsetTop;
				var left = $(this).context.offsetLeft;
				var height = $(this).height();
				
				console.log(height);
				
				var width = $(this).width();
				var bottom = top + height - 20;
				var right = left + width - 130;

				//create variable for the image source
				var src = $('#' + id).prop('src');

				//create the popup div
				$('body').append('<div id="' + idPopup + '" class="image-share-popup">');
				$('.image-share-popup').css({
					'font-size' : '20px'
				});

				//size var
				var size = Number(($('body').css('font-size')).replace('px', ''));

				//style the popup div
				$('#' + idPopup).css({
					'position' : 'absolute',
					'top' : top,
					'left' : left,
					'width' : width,
					'height' : height,
					'background' : settings.backgroundColor,
					'color' : settings.fontColor,
					'font-family' : settings.fontFamily,
					'text-align' : 'center',
					'line-height' : height / 20,
					'border': '2px solid black'
				});

				//add content to the popup div
				$('#' + idPopup).append('<div style="margin-bottom:-' + height/2.1 + ';">' + settings.shareText + '</div><div style="margin-left:15px;"><i class="fa fa-facebook-square" aria-hidden="true"></i><i class="fa fa-reddit-square" aria-hidden="true"></i><i class="fa fa-twitter-square" aria-hidden="true"></i><i class="fa fa-google-plus-square" aria-hidden="true"></i><i class="fa fa-linkedin-square" aria-hidden="true"></i></div>');

				//set basic css
				$('#' + idPopup + ' i').css({
					'cursor' : 'pointer',
					'font-size' : '35px',
					'margin-right' : '15px'
				}).each(function() {
					var type = (($(this).attr('class')).split(' ')[1]).split('-')[1];
					$(this).addClass('image-share-' + type + '-' + unique);
				});

				//style and show/hide icons

				//set default colors

				$('.image-share-facebook-' + unique).css('color', '#3b5998');
				$('.image-share-twitter-' + unique).css('color', '#4099ff');
				$('.image-share-linkedin-' + unique).css('color', '#0e76a8');
				$('.image-share-google-' + unique).css('color', '#d34836');
				$('.image-share-reddit-' + unique).css('color', '#ff5700');

				//facebook
				if (settings.facebook && settings.facebook == 'hide') {
					$('.image-share-facebook-' + unique).hide()
				}

				//twitter
				if (settings.twitter && settings.twitter == 'hide') {
					$('.image-share-twitter-' + unique).hide()
				}

				//linkedin
				if (settings.linkedin && settings.linkedin == 'hide') {
					$('.image-share-linkedin-' + unique).hide();
				}

				//google plus
				if (settings.googleplus && settings.googleplus == 'hide') {
					$('.image-share-google-' + unique).hide()
				}

				//reddit
				if (settings.reddit && settings.reddit == 'hide') {
					$('.image-share-reddit' + unique).hide()
				}

				//hide the popup div
				$('#' + idPopup).hide();

				//fadein the popup div
				$(this).mouseover(function() {
					$('#' + idPopup).fadeIn(settings.fade);
				});

				//fadeout the popup div
				$('#' + idPopup).mouseleave(function() {
					$(this).fadeOut(settings.fade);
				});

				//share the image

			});

		};

	}(jQuery));
