import MobileMenu from 'MobileMenu';
import RevealOnScroll from 'RevealOnScroll';
import StickyHeader from 'StickyHeader';
import Modal from 'Modal';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();