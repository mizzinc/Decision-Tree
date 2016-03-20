=== Plugin Name ===
Contributors: sidecar / codeable
Donate link: http://sidecar.tv/decision_tree/
Tags: decision tree
Requires at least: 3.6
Tested up to: 4.4.2
Stable tag: 1.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

----- THIS IS A MODIFIED VERSION OF THE ORIGINAL SIDECAR PLUGIN -----

== Description ==
The Decision Tree plugin is the only plugin we know of where you can easily build 
a decision tree allowing you to easily present your visitors yes/no type questions
and walk them down your decision tree.

= Easy to build =

The Decision Tree plugin is the only plugin we know of where you can easily build 
a decision tree (DT).  Easily create your own trees with the easy to use DT editor. 
You can quickly build up your questions and map them to the correct answers

= Easy to use =

The Decision Tree plugin is the only plugin we know of where you can easily build a 
decision tree (DT).  Easily create your own trees with the easy to use DT editor. 
You can quickly build up your questions and map them to the correct answers:
Easy to use

When it comes time to insert your DT, we’ve got your back.  Simply click the DT 
button on either your text or visual editor and choose the DT you’d like to show 
in your page or your post. Simple as pie:

== Installation ==

1. Upload `DecisionTree` folder to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Go build your first DT!

== Frequently Asked Questions ==

= Can I add a link to click in an answer? =

Yes!  After much planning to add this feature, we have. Answers that
have links will work like other steps, but you can
go to an arbitrary URL.  Note - garbage in, garbage out - if you specify
a URL that is invalid, your users will have a bad experience.

For Answers with no links, we no longer have a hover effect to make
the cursor a pointer, so the answer no long seems clickable like in
earlier releases of DT.

= Can I get statistics on which answers folks arrived at? =

Not now!  We're planning on adding this feature later.

= After I save a DT and I click view post in "Post updated. View post" message, I don't see my DT.  What gives? =

There's a known issue we need to fix in that DT's don't render when viewed directly like a page or post.  
Instead, you can either preview the DT while you're editing it or you can insert the DT on a page
or a post and view it there.

= I was working on a DT and it broke: the last step is out of order and I can't delete it!?! =

We've had a few users report that their DTs have problem when they're editing
them.  Specifically, the step number will jump to be out of order and they can
 no longer publish the DT.  We're aware of the issue and are trying to fix it.
 Please let us know if you have any details on how to reproduce the issue!

== Screenshots ==

1. Start by creating a DT 
2. Then use the editor to place the DT in your post or page
3. You visitor see an easy to use DT 
4. And they'll know when they've reached their answer 

== Changelog ==

= 1.2 =
* Added back button.
* Made trees in admin sortable. 

= 1.1 =
* Added feature so answers can now have links and info boxes with HTML.
* Fixed a bug when inserting DT in post or page, the DT modal rendering beneath WYSIWYG bar. We now render as expected.
* Fixed a bug which showed "Add Choice" buttons for answers. They're now hidden.
* Fixed a bug where answers with no links don't have hover effects like links do. Linkless answers no long have hover effects.

= 1.0.4 =
* Fixed a bug warning of unsaved changes when DT was active

= 1.0.3 =
* Fix DT loss when you hit return
* Fix DT loss when you click "Save Draft"
* Fix DT not rendering when the title has an apostrophe
* Hide choices when step is an answer
* Ensure 3.9.2 support
* Rev versions to 1.0.3

= 1.0.2 =
* Fix link in dashboard to privacy policy and terms of service.  If you're wondering, it's here! http://sidecar.tv/about-privacy-tos/
* WordPress.org: Add a few FAQs based on forum activity.
* WordPress.org: Add banner and fix main top text to not overflow.
* WordPress.org: Clean up readme and screenshots.   Remove awkward "other notes". 

= 1.0.1 =
* Fix links in admin to dashboard and instructions

= 1.0 =
* Initial release

== Upgrade Notice ==

= NA =
