#  MiloWorld Project Notes

This is my first full scale Nuxt universal app. 

The original concept was to simply build up a Nuxt frontend and then get it to fetch dummy data via REST from a service such as Firebase. After a bit of playing around, I decided to change tack and build up a backend with Strapi connected to a MongoDB Atlas database cluster and to use a GraphQL API - mainly because it seemed like an interesting challenge.

**GraphQL Implementation**

* To use the GraphQL API, I used the Apollo Nuxt module, making extensive use of Apollo queries within the components to fetch the data. I found that it was a very efficient and flexible way of building out the queries and to carry out post processing on the results before passing them to where they were needed.

* The Strapi GraphQL API, unfortunately, has some limitations which I found out quite late in the project implementation and I couldn’t really reverse course without undoing an awful lot of work:

  * An example of such a limitation is that it is currently not possible to make logical AND/OR queries.
  * As a result, I had to figure out some interesting ways to get around these limitations. In some cases, it was simply not possible to engineer a complete workaround and you might notice that there is something off with a couple of the more advanced data retrieval features - for instance, in the product filters.

* I made a deliberate decision to not implement anything other than basic GET requests as I was already working with a lot of unfamiliar topics. More complicated things will come in the next project.

**Cloudinary Implementation**

* Another new thing for me was to use a content delivery network to serve up the images. In this case, I used Cloudinary. A few notes on this particular implementation:

  * I made extensive use of image loading placeholders to improve the general user experience. This is a feature that is greatly facilitated by the Cloudinary Nuxt package.
  * To further assist the UI, I used a couple of CSS tricks to help to prevent reflow during the loading of the images - i.e. to prevent when the images, which are slower to load than text/data, push the other HTML elements out of the way.

**Database Implementation**

* Strapi is primarily a content management system. After reading stories of creating a local database with Strapi being erased when deploying, I did a little investigation and figured that a nice workaround would be to connect it to a cloud based database, hence the selection of MongoDB Atlas - at least this way I wouldn’t have to deal with the headache of reinputting lots and lots of dummy data.

* Regarding the data itself:

  * I lifted the specs of various Siemens PLC cards and used this as dummy data, mainly because it was very nicely organised and readily available.
  * I built up a relational database, broadly arranged in the following manner:

 CATEGORIES
 |
 TYPES
 |
 PRODUCT FAMILIES
 |
 PRODUCTS ———————————— ACCESSORIES

  * This arrangement made it easier to mimic these relationships on the UI - for instance, if you click on a product, it’ll tell you what the compatible accessories are and vice versa.
  * Being the first database I have ever made, I’d have to say that it was a pretty decent attempt; however, there have also been a lot of lessons learned.

* Aside from a couple of placeholders, whenever you are viewing a product/accessory on the frontend, all the data is dynamically served up from the backend. For instance, if you view a certain product, you will also be able to see information regarding that particular product’s “type” and “product family” served up. It is worth mentioning here that, in order to parse some of the long text, I used a Nuxt markdown package.

**
**

**List of All Modules / Third Party Content Used**

**
**

* @nuxtjs/apollo
* @nuxtjs/cloudinary
* @nuxtjs/markdownit
* @nuxtjs/strapi
* Bootstrap / Bootstrap-Vue

**Deployment**

* Both backend and frontend are deployed via Heroku.
