import image1 from './images/1-app-store.PNG';
import image2 from './images/2-landing.PNG';
import image3 from './images/3-search.PNG';
import image4 from './images/4-search-result.PNG';
import image5 from './images/5-result-details.PNG';
import image6 from './images/6-menu.PNG';
import image7 from './images/7-select-area.PNG';
import image8 from './images/8-adjust.PNG';
import image9 from './images/9-finish.PNG';

export default [
    {
        title: 'Get Google Maps',
        description:
            'Go to the Apple App store and download Google Maps. Apple maps does not support downloading maps unfortunately.',
        image: image1,
        imageAltText: 'Google Maps on the Apple App Store'
    },
    {
        title: 'Open Google Maps',
        description:
            'Once Google Maps is downloaded, open it, and start entering the location you wish to download in the search bar.',
        image: image2,
        imageAltText: 'Landing page of Google Maps'
    },
    {
        title: 'Find Correct Result',
        description:
            "Once you have entered your location, and without clicking 'enter' or 'search', click on the specific location from the search results.",
        image: image3,
        imageAltText: 'Search for an area in the search bar at the top'
    },
    {
        title: 'Result Location',
        description:
            'You will now be looking at your selected location. Click on the name of your location in the white bar near the bottom of your screen.',
        image: image4,
        imageAltText: 'Result from the search'
    },
    {
        title: 'Open Menu',
        description: 'Open the menu by clicking the elipsis in the upper right of your screen.',
        image: image5,
        imageAltText: 'Details of searched location'
    },
    {
        title: 'Click Download',
        description: "In the menu, select the top option, labeled 'Download offline map'.",
        image: image6,
        imageAltText: 'Open menu'
    },
    {
        title: 'Select Area',
        description:
            'Drag the map around until all of the area you wanted to download is in the blue box. Be sure to include dities that may be on or outside the edge, like Dublin.',
        image: image7,
        imageAltText: 'Select area you want to download'
    },
    {
        title: 'Start Download',
        description:
            "After you have adjusted the map to include everything you wish to download, click 'Download' in the bottom right.",
        image: image8,
        imageAltText: 'Click download'
    },
    {
        title: 'Finished',
        description:
            'Your download will have started, and it may take a while, depending on the size of the map you are downloading.',
        image: image9,
        imageAltText: 'Wait for download to complete.'
    }
];
