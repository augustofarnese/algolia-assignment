# Question 1
>Hello,
>
>I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:
>- Records
>- Indexing
>
>I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking." 
>
>Cheers,
>George

## Answer 1

Hi George.

Thanks for reaching out! I'd be more than happy to help you with your onboarding.

Let's start talking about indexing and records. Before you can search your content with Algolia, you need to send your data to Algolia. An **index** is where your data will be stored. For example, if you are willing to make a search for cars to be sold, an index would be a list of all the cars available, and the information regarding those cars, like price, color, model, etc. So, **indexing** is the process of adding that information to an index.

Once you start working with an index, you have to fetch your data from your data source, transform that data into JSON **records**, and save these **records** to an index. So the **record** is the object you add to an index. In the given example, each car would be a **record** added to an **index**.  An example of a car record would be:

```json
{
  "name": "Used 2017 Chevrolet Camaro 2SS",
  "brand": "Chevrolet",
  "color": "Hyper Blue Metallic",
  "Fuel type": "Gasoline",
  "Mileage": "6,401 mi.",
  "price": 45000
}
```

**Custom ranking** is a way you can increase visibility for some of your most products, on top of Algolia’s default ranking strategy. Typical custom ranking attributes include the number of sales, views, likes, ratings, release date, etc. It gives you direct control of the ordering and is often the deciding factor on which records appear in the first set of results.

You can refer to our FAQ and documentation, where you might find some insightful information. I recommend these pages about [sending and managing data](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/) and [custom ranking](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/)

If you have any more questions or come across any other issue, let me know, I’ll be happy to help.

Have a great day,

Augusto

# Question 2

>Hello,
>
>Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.
>
>Regards,
>Matt 

## Answer 2

Hi, Matt.

Thank you so much for sharing your experience with Algolia. Your feedback helps us improve our product service for everyone.

Every redesign is intended to provide a better experience for our customers. I'm sorry you had a bad experience with our new dashboard design. 

If you need to clear and delete indexes lots of times, I would suggest you read more about our powerful APIs. Most dashboard features are available via the API. In most cases, the API is the preferred method. Although you will need some engineering work, it should save you a lot of time working with your indexes. You can refer to [our documentation](https://www.algolia.com/doc/guides/getting-started/how-algolia-works/in-depth/ecosystem/#using-the-api-clients) to learn more about our API clients. 

Let me know if it seems suitable for you and we can schedule a call and I will be glad to give an overview of our API usage for you and your engineering team.

Best regards,

Augusto

# Question 3

>Hi,
>
>I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?
>
>Regards,
>Leo

## Answer 3

Hi, Leo.

It's great to know that you are interested in Algolia as your website search engine.

Algolia provides a set of tools that simplify the process of making and integrating a full search experience into your website. You can have a running search environment without a lot of engineering work. 

The high level process is very simple:

1. **Send your data to Algolia**: Before you can search your content with Algolia, you need to send your data to Algolia. To do so, you need to fetch your data from your data source, transform your data into JSON records and send them to Algolia.
2. **Configure relevance**: After pushing your data to Algolia, you will need to configure the relevance of each attribute. Some attributes will be used for searching items, others for sorting and customizing ranking, and others for filtering. 
3. **Build UI for searching in your website**: Once your data is uploaded and relevance is set up, you can use our [InstantSearch libraries](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/) to build the UI for searching items. 

You can learn more about the whole process in our [documentation](https://www.algolia.com/doc/).

Don’t hesitate to reach out to me if you have any questions. I'll be glad to help.

Best regards,

Augusto



