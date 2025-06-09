import React, { useState } from "react";

import Press_Releases from "../assets/Press_Releases.pdf";
export default function PressReleaseShowcase() {
  const [showFullArticle, setShowFullArticle] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Complete list of media outlets from pages 8-13
 const allMediaOutlets = [
    {
      name: "ANI News",
      type: "Broadcast Media",
      visits: "1.45M visits/month",
      country: "IN,PAK,US",
      icon: "https://www.aninews.in/images/ani-logo-mobile.png",
      link: "https://www.aninews.in/news/business/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151456/"
    },
    {
      name: "Latestly",
      type: "News Portal",
      visits: "1.7M visits/month",
      country: "IN",
      icon: "https://www.latestly.com/wp-content/uploads/2018/09/cropped-favicon.png",
      link: "https://www.latestly.com/agency-news/business-news-the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-2025-6805851.html"
    },
    {
      name: "Google News",
      type: "News Aggregator",
      visits: "54.7M visits/month",
      country: "FRA,GER,IN,JA,US",
      icon: "https://www.gstatic.com/news/favicon.ico",
      link: "https://news.google.com/search?q=The+Innovators+of+Tomorrow&amp;hl=en-IN&amp;gl=IN&amp;ceid=IN:en&hl=en-IN&gl=IN&ceid=IN:en"
    },
    {
      name: "Jio News",
      type: "News Aggregator",
      visits: "726K visits/month",
      country: "IN",
      icon: "https://www.jio.com/apps/jiomeet/images/jio-logo.svg",
      link: "https://www.latestly.com/agency-news/business-news-the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-2025-6805851.html?utm_source=JioNews&utm_medium=referral&utm_campaign=JioNews"
    },
    {
      name: "The Tribune",
      type: "News Portal",
      visits: "1.2M visits/month",
      country: "IN",
      icon: "https://www.tribuneindia.com/Content/images/logo.png",
      link: "https://www.tribuneindia.com/news/business/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-2025/"
    },
    {
      name: "Daily Hunt",
      type: "News Aggregator",
      visits: "18.8M visits/month",
      country: "IN,UAE,US",
      icon: "https://m.dailyhunt.in/assets/img/apple-touch-icon.png",
      link: "https://m.dailyhunt.in/news/india/english/ani+english-epaper-anieng/the+innovators+of+tomorrow+visionary+brands+redefining+the+future+in+2025-newsid-n661594403?sm=Y"
    },
    {
      name: "Daily Hunt (Lokmat)",
      type: "News Aggregator",
      visits: "23.2M visits/month",
      country: "IN,UAE,US",
      icon: "https://m.dailyhunt.in/assets/img/apple-touch-icon.png",
      link: "https://www.dailyprabhat.com/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-2025/"
    },
    {
      name: "Daily Prabhat",
      type: "News Portal",
      visits: "2.5K visits/month",
      country: "IN",
      icon: "https://dailyprabhat.com/wp-content/uploads/2023/04/daily-prabhat-logo.png",
      link: "https://www.dailyprabhat.com/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-2025/"
    },
    {
      name: "South India News",
      type: "News Portal",
      visits: "4K visits/month",
      country: "IN,US",
      icon: "https://southindianews.com/wp-content/uploads/2021/09/logo.png",
      link: "https://www.southindianews.in/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Indian News Network",
      type: "News Portal",
      visits: "34.4K visits/month",
      country: "IN",
      icon: "https://indianewsnetwork.com/wp-content/uploads/2022/01/favicon.ico",
      link: "https://www.indiannewsnetwork.net/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Haryana Today",
      type: "News Portal",
      visits: "5.9K visits/month",
      country: "IN,US",
      icon: "https://haryanatoday.in/wp-content/uploads/2022/04/haryana-today-logo.png",
      link: "https://www.haryanatoday.in/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Madhya Pradesh Chronicle",
      type: "News Portal",
      visits: "5.2K visits/month",
      country: "IN,US",
      icon: "https://mpchronicle.com/wp-content/uploads/2021/05/logo.png",
      link: "https://www.madhyapradeshchronicle.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Maharashtra Samachar",
      type: "News Portal",
      visits: "11.3K visits/month",
      country: "IN,US",
      icon: "https://maharashtrasamachar.com/images/logo.png",
      link: "https://www.maharashtrasamachar.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Kashmir Breaking News",
      type: "News Portal",
      visits: "4.2K visits/month",
      country: "IN,US",
      icon: "https://kashmirbreaking.com/wp-content/uploads/2022/07/kbn-logo.png",
      link: "https://www.kashmirbreakingnews.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Indian Economic Observer",
      type: "News Portal",
      visits: "35.2K visits/month",
      country: "IN,US",
      icon: "https://indianeconomicobserver.com/assets/images/logo.png",
      link: "https://www.indianeconomicobserver.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Telengana Journal",
      type: "News Portal",
      visits: "2K visits/month",
      country: "IN,US",
      icon: "https://telenganajournal.in/wp-content/uploads/2021/11/logo.png",
      link: "https://www.telanganajournal.in/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Gujarat Varta",
      type: "News Portal",
      visits: "4.1K visits/month",
      country: "IN,US",
      icon: "https://gujaratvarta.com/wp-content/uploads/2022/02/gujarat-varta-logo.png",
      link: "https://www.gujaratvarta.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Andhra Pradesh Mirror",
      type: "News Portal",
      visits: "18K visits/month",
      country: "IN,US",
      icon: "https://andhrapradeshmirror.com/wp-content/uploads/2020/12/apm-logo.png",
      link: "https://www.andhrapradeshmirror.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "West Bengal Khabar",
      type: "News Portal",
      visits: "3.2K visits/month",
      country: "IN,US",
      icon: "https://westbengalkhabar.in/wp-content/uploads/2021/08/wbk-logo.png",
      link: "https://www.westbengalkhabar.in/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Delhi Live News",
      type: "News Portal",
      visits: "16.3K visits/month",
      country: "IN,US",
      icon: "https://delhilivenews.in/wp-content/uploads/2021/06/dln-logo.png",
      link: "https://www.delhilivenews.in/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Vanakkam Tamil Nadu",
      type: "News Portal",
      visits: "3.1K visits/month",
      country: "IN,US",
      icon: "https://vanakkamtamilnadu.com/assets/images/logo.png",
      link: "https://www.vanakkamtamilnadu.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Gujarat Samachar",
      type: "News Portal",
      visits: "17.1K visits/month",
      country: "IN,US",
      icon: "https://www.gujaratsamachar.com/images/logo.png",
      link: "https://www.gujaratsamachar.news/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Karnataka Live",
      type: "News Portal",
      visits: "2.7K visits/month",
      country: "IN,US",
      icon: "https://karnatakalivenews.com/wp-content/uploads/2022/03/karnataka-live-logo.png",
      link: "https://www.karnatakalive.in/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Rajasthan Ki Khabar",
      type: "News Portal",
      visits: "23.4K visits/month",
      country: "IN,US",
      icon: "https://rajasthankikhabar.com/wp-content/uploads/2021/04/rkk-logo.png",
      link: "https://www.rajasthankikhabar.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "UP Today",
      type: "News Portal",
      visits: "21.8K visits/month",
      country: "IN,US",
      icon: "https://uptoday.news/wp-content/uploads/2022/01/up-today-logo.png",
      link: "https://www.uptoday.news/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Himachal Patrika",
      type: "News Portal",
      visits: "2K visits/month",
      country: "IN,US",
      icon: "https://himachalpatrika.com/wp-content/uploads/2021/09/himachal-patrika-logo.png",
      link: "https://www.himachalpatrika.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Chhattisgarh Today",
      type: "News Portal",
      visits: "2.7K visits/month",
      country: "IN,US",
      icon: "https://chhattisgarhtoday.in/wp-content/uploads/2022/02/cg-today-logo.png",
      link: "https://www.chhattisgarhtoday.in/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Punjab Live",
      type: "News Portal",
      visits: "4.4K visits/month",
      country: "IN",
      icon: "https://punjablive.news/wp-content/uploads/2021/07/punjab-live-logo.png",
      link: "https://www.punjablive.news/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Kashmir News Line",
      type: "News Portal",
      visits: "12K visits/month",
      country: "IN,US",
      icon: "https://kashmirnewsline.com/wp-content/uploads/2022/03/kashmir-news-line-logo.png",
      link: "https://www.kashmirnewsline.in/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Bihar 24x7",
      type: "News Portal",
      visits: "5.2K visits/month",
      country: "IN,US",
      icon: "https://bihar24x7.com/wp-content/uploads/2021/05/bihar-24x7-logo.png",
      link: "https://www.bihar24x7.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "North East Times",
      type: "News Portal",
      visits: "2.7K visits/month",
      country: "IN,US",
      icon: "https://northeasttimes.in/wp-content/uploads/2022/01/ne-times-logo.png",
      link: "https://www.northeasttimes.in/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Bihar Times",
      type: "News Portal",
      visits: "29.4K visits/month",
      country: "IN",
      icon: "https://bihartimes.news/wp-content/uploads/2021/08/bihar-times-logo.png",
      link: "https://www.bihartimes.news/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Odisha Post",
      type: "News Portal",
      visits: "28.5K visits/month",
      country: "IN,US",
      icon: "https://odishapost.com/wp-content/uploads/2020/12/odisha-post-logo.png",
      link: "https://www.odishapost.news/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Sri Lanka Island News",
      type: "News Portal",
      visits: "2K visits/month",
      country: "IN,US",
      icon: "https://srilankainslandnews.com/wp-content/uploads/2022/04/sl-island-news-logo.png",
      link: "https://www.srilankaislandnews.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "British Columbia Times",
      type: "News Portal",
      visits: "35.4K visits/month",
      country: "IN",
      icon: "https://britishcolumbiatimes.com/images/logo.png",
      link: "https://www.britishcolumbiatimes.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "US World Today",
      type: "News Portal",
      visits: "8.7K visits/month",
      country: "IN,US",
      icon: "https://usworldtoday.com/wp-content/uploads/2021/10/us-world-today-logo.png",
      link: "https://www.usworldtoday.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Florida Breaking News",
      type: "News Portal",
      visits: "13.7K visits/month",
      country: "IN,US",
      icon: "https://floridabreakingnews.com/wp-content/uploads/2022/01/florida-bn-logo.png",
      link: "https://www.floridabreakingnews.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Richmond Evening News",
      type: "News Portal",
      visits: "4.1K visits/month",
      country: "IN",
      icon: "https://richmondeveningnews.com/images/ren-logo.png",
      link: "https://www.richmondeveningnews.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Mountain View Sentinel",
      type: "News Portal",
      visits: "2K visits/month",
      country: "IN",
      icon: "https://mountainviewsentinel.com/assets/images/mvs-logo.png",
      link: "https://www.mountainviewsentinel.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Toronto Sun Times",
      type: "News Portal",
      visits: "14.4K visits/month",
      country: "IN",
      icon: "https://torontosuntimes.ca/wp-content/uploads/2021/06/tst-logo.png",
      link: "https://www.torontosuntimes.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "France Network Times",
      type: "News Portal",
      visits: "3.9K visits/month",
      country: "IN,US",
      icon: "https://francenetworktimes.com/images/fnt-logo.png",
      link: "https://www.francenetworktimes.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "England News Portal",
      type: "News Portal",
      visits: "37.3K visits/month",
      country: "IN,US",
      icon: "https://englandnewsportal.co.uk/wp-content/uploads/2021/12/enp-logo.png",
      link: "https://www.englandnewsportal.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Federal Despatch",
      type: "News Portal",
      visits: "11.9K visits/month",
      country: "IN,US",
      icon: "https://federaldespatch.com/wp-content/uploads/2022/02/federal-despatch-logo.png",
      link: "https://www.federaldespatch.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Birmingham All News Network",
      type: "News Portal",
      visits: "12.2K visits/month",
      country: "IN",
      icon: "https://birminghamallnews.co.uk/images/bann-logo.png",
      link: "https://www.birminghamallnewsnetwork.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Miami News Herald",
      type: "News Portal",
      visits: "4.6K visits/month",
      country: "IN,US",
      icon: "https://miaminewsherald.com/wp-content/uploads/2021/09/mnh-logo.png",
      link: "https://www.miaminewsherald.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "White House News Time",
      type: "News Portal",
      visits: "11.2K visits/month",
      country: "IN,US",
      icon: "https://whitehousenewstime.com/wp-content/uploads/2022/03/whnt-logo.png",
      link: "https://www.whitehousenewstime.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Dubai City Reporter",
      type: "News Portal",
      visits: "3.6K visits/month",
      country: "IN",
      icon: "https://dubaicityreporter.ae/assets/images/dcr-logo.png",
      link: "https://www.dubaicityreporter.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Washington DC Despatch",
      type: "News Portal",
      visits: "4.3K visits/month",
      country: "IN,US",
      icon: "https://washingtondcdespatch.com/wp-content/uploads/2021/11/wdc-despatch-logo.png",
      link: "https://www.washingtondcdespatch.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "New York Despatch",
      type: "News Portal",
      visits: "14.2K visits/month",
      country: "IN,US",
      icon: "https://newyorkdespatch.com/wp-content/uploads/2022/01/ny-despatch-logo.png",
      link: "https://www.newyorkdespatch.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Buffalo Despatch",
      type: "News Portal",
      visits: "10.8K visits/month",
      country: "IN,US",
      icon: "https://buffalodespatch.com/wp-content/uploads/2021/08/buffalo-despatch-logo.png",
      link: "https://www.buffalodespatch.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "East Coast American News",
      type: "News Portal",
      visits: "4.4K visits/month",
      country: "IN,US",
      icon: "https://eastcoastamericannews.com/images/ecan-logo.png",
      link: "https://www.eastcoastamericannews.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "European Sun Times",
      type: "News Portal",
      visits: "14.4K visits/month",
      country: "IN",
      icon: "https://europeansuntimes.eu/wp-content/uploads/2021/07/est-logo.png",
      link: "https://www.europeansuntimes.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Maldives Star Plus",
      type: "News Portal",
      visits: "5.7K visits/month",
      country: "IN,US",
      icon: "https://maldivesstarplus.mv/assets/images/msp-logo.png",
      link: "https://www.maldivesstarplus.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "Capitol Hill Reporter",
      type: "News Portal",
      visits: "28.6K visits/month",
      country: "IN,US",
      icon: "https://capitolhillreporter.com/wp-content/uploads/2022/02/chr-logo.png",
      link: "https://www.capitolhillreporter.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "East Asia All News Portal",
      type: "News Portal",
      visits: "4.6K visits/month",
      country: "IN,US",
      icon: "https://eastasiaallnews.com/images/eaan-logo.png",
      link: "https://www.eastasiaallnewsportal.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446/"
    },
    {
      name: "London Channel News",
      type: "News Portal",
      visits: "6.2K visits/month",
      country: "IN,US",
      icon: "https://londonchannelnews.co.uk/wp-content/uploads/2021/10/lcn-logo.png",
      link: "https://www.londonchannelnews.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "British News Network",
      type: "News Portal",
      visits: "5.6K visits/month",
      country: "IN,US",
      icon: "https://britishnewsnetwork.co.uk/assets/images/bnn-logo.png",
      link: "https://www.britishnewsnetwork.com/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    },
    {
      name: "World News Network",
      type: "News Portal",
      visits: "17.4K visits/month",
      country: "IN,US",
      icon: "https://worldnewsnetwork.global/wp-content/uploads/2021/12/wnn-logo.png",
      link: "https://www.worldnewsnetwork.net/news/the-innovators-of-tomorrow-visionary-brands-redefining-the-future-in-202520250424151446"
    }
  ];

  // Calculate total pages
  const totalPages = Math.ceil(allMediaOutlets.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allMediaOutlets.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Previous page
  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // Next page
  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
      <div className="mb-8">
       <span className="bg-green-100 text-green-900 text-lg font-bold px-3 py-1 rounded-xl shadow-sm tracking-wide">
            Featured News
       </span>
        <h1 className="text-3xl font-bold mt-2 mb-1 text-gray-800">
          The Innovators of Tomorrow
        </h1>
        <h2 className="text-xl text-gray-600 mb-4">
          Visionary Brands Redefining the Future in 2025
        </h2>
        <p className="text-sm text-gray-500">
          Press release published on April 24, 2025
        </p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <div className="flex items-start mb-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Marichi Ventures | Managing Director: Sarvesh Singh
            </h3>
            <h4 className="text-lg font-medium text-gray-700 italic mb-4">
              Nurturing Leaders for a Changing World
            </h4>
          </div>
        </div>

        <div className="mb-6 text-gray-700">
          <p className="mb-4">
            Marichi Ventures, founded by Sarvesh Singh, is redefining leadership
            development through self-awareness, adaptability, and purpose. With
            over 20 years of experience as an executive coach and board advisor,
            Sarvesh launched Marichi Ventures with the powerful belief in the
            "Magic of 1%"—investing just 1% of your time and income in
            self-growth can lead to transformative results.
          </p>

          {showFullArticle && (
            <p className="mb-4">
              Marichi Ventures has impacted over 100 leaders, 200+ professionals
              in career transitions, 10,000+ students, and 50+ startups. Their
              offerings, including executive coaching, leadership workshops, and
              WhatsApp-based micro-coaching, make growth accessible and
              personal. By helping individuals and organizations navigate
              change, Marichi Ventures empowers leaders to shape the future, one
              step at a time.
            </p>
          )}

          {!showFullArticle && (
            <button
              className="text-green-800 hover:text-green-800 font-medium"
              onClick={() => setShowFullArticle(true)}
            >
              Read more...
            </button>
          )}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800 text-center md:text-left">
            Featured In
          </h3>
          <div className="text-sm flex flex-col md:flex-row justify-center items-center text-gray-600 mt-2 md:mt-0 space-y-1 md:space-x-2">
            <span className="text-xs md:text-sm mt-1 bg-green-300 py-1 px-2 rounded-lg">
              58 full page placements
            </span>
            <span className="text-xs md:text-sm bg-green-300 py-1 px-2 rounded-lg">
              across 50+ outlets
            </span>
            <span className="text-xs md:text-sm mt-1 bg-green-300 py-1 px-2 rounded-lg">
              102M+ Potential Audience
            </span>


          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
          {currentItems.map((outlet, index) => (
            <a
              key={index}
              href={outlet.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-green-200 rounded-xl cursor-pointer p-3 text-center hover:shadow-md transition-shadow"
            >
              <div className="h-8 flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                  {/* <img
            className="w-6 h-6 rounded-full" 
            src={outlet.icon}
            alt={${outlet.name} icon}
          /> */}
                  <span className="text-xs font-bold text-green-800">
                    {outlet.name.charAt(0)}
                  </span>
                </div>
              </div>
              <p className="font-medium text-gray-800 text-sm">{outlet.name}</p>
              <p className="text-xs text-gray-500">{outlet.visits}</p>
            </a>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <nav className="inline-flex rounded-md shadow-sm">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-l-md border ${currentPage === 1
                  ? "bg-gray-100 text-gray-400"
                  : "bg-white text-green-800 hover:bg-green-50"
                }`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(
                (num) =>
                  num === 1 ||
                  num === totalPages ||
                  (num >= currentPage - 1 && num <= currentPage + 1)
              )
              .map((number) => (
                <React.Fragment key={number}>
                  {number > 1 && number - 1 !== currentPage - 1 && (
                    <span className="px-3 py-1 border-t border-b text-gray-700 bg-gray-50">
                      ...
                    </span>
                  )}
                  <button
                    onClick={() => paginate(number)}
                    className={`px-3 py-1 border-t border-b ${currentPage === number
                        ? "bg-green-50 text-green-700 font-medium"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    {number}
                  </button>
                </React.Fragment>
              ))}

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-r-md border ${currentPage === totalPages
                  ? "bg-gray-100 text-gray-400"
                  : "bg-white text-green-800 hover:bg-green-50"
                }`}
            >
              Next
            </button>
          </nav>
        </div>
      </div>

      {/* <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          About The Report
        </h3>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-2/3">
            <p className="mb-4 text-gray-700">
              This press release was part of "The Innovators of Tomorrow:
              Visionary Brands Redefining the Future in 2025" report, featuring
              10 groundbreaking companies that are transforming industries
              through innovation and purpose-driven leadership.
            </p>
            <p className="mb-6 text-gray-700">
              The report achieved significant media coverage across multiple
              news outlets with a potential audience reach of over 102 million
              readers.
            </p>
            <a
              href={Press_Releases}
              download="Press_Releases.pdf"
              className="inline-flex items-center text-white bg-green-800 hover:bg-green-700 font-medium rounded px-4 py-2"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                />
              </svg>
              Download Full Press Release
            </a>
          </div>
          <div className="md:w-1/3 bg-green-100 p-4 rounded-lg">
            <div className="text-center mb-4">
              <span className="text-3xl font-bold text-green-800">58</span>
              <p className="text-sm text-gray-600">Full Page Placements</p>
            </div>
            <div className="text-center mb-4">
              <span className="text-3xl font-bold text-green-800">102M+</span>
              <p className="text-sm text-gray-600">Potential Audience</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-green-800">50+</span>
              <p className="text-sm text-gray-600">News Outlets</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}