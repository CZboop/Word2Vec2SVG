# Word2Vec2SVG

Python script creating SVG polygons from word2vec model vectors, and React app to view and compare them.

React app has example data, simplified due to large files size, and can be run as is. Example data was made from a simpler version of [this](https://github.com/CZboop/SCP-Scraping-and-Analysis/tree/main/word2vec/model_embeddings), and the data prep folder contains a file showing example of the type of model setup that generated the two datasets used in the frontend app. This ModelMakingExample file also has example setup for full model. Full model would create more detailed shapes and larger vocabulary, but much larger end files that would be better to only have locally.

Data prep folder also contains script used to create SVG info as .json file for use in the React or other front end apps, so other models can be converted. However, React app currently has SVG viewbox info hard coded to suit the example data, and this may need to be tweaked to properly display other data.

React app is set up to take and toggle between two datasets, one with simpler shapes (which may make differences between words clearer) and more complex shapes with more points. 
