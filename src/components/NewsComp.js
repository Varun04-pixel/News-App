import { Component } from "react";
import NewsItems from "./NewsItems";

class NewsComp extends Component {
  constructor() {
    super();
    this.state = {
        content:  [
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Chris Cwik",
      "title": "Paige Bueckers wins WNBA Rookie of the Year award after surprise announcement from Cathy Engelbert - Yahoo Sports",
      "description": "Paige Bueckers didn't see this one coming.",
      "url": "https://sports.yahoo.com/wnba/breaking-news/article/paige-bueckers-wins-wnba-rookie-of-the-year-award-after-surprise-announcement-from-cathy-engelbert-151223200.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/8gMPfEglJYtOOIr5SY64KQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA7Y2Y9d2VicA--/https://s.yimg.com/os/creatr-uploaded-images/2025-09/cbf06540-930e-11f0-adef-f187144323cf",
      "publishedAt": "2025-09-16T15:12:23Z",
      "content": "Paige Bueckers proved she was a star in her rookie season. After being selected by the Dallas Wings with the No. 1 overall pick in the 2025 WNBA Draft, Bueckers averaged 19.2 points per game and earn… [+2042 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Karolina Jeznach",
      "title": "Residents of Eastern Poland Fear Russia’s War in Ukraine Is Coming to Them - The Wall Street Journal",
      "description": "Days after drones reached deep inside Polish territory, locals worry Russia’s hybrid campaign could turn into a military confrontation",
      "url": "https://www.wsj.com/world/europe/poland-reactions-russia-ukraine-war-cf53ca4c",
      "urlToImage": "https://images.wsj.net/im-75522737/social",
      "publishedAt": "2025-09-16T14:10:38Z",
      "content": null
    },
    {
      "source": {
        "id": "politico",
        "name": "Politico"
      },
      "author": "Seb Starcevic",
      "title": "Trump sues ‘degenerate’ New York Times for $15B - Politico",
      "description": "“The New York Times has been allowed to freely lie, smear, and defame me for far too long, and that stops, NOW!” the president said in a Truth Social post.",
      "url": "https://www.politico.com/news/2025/09/16/donald-trump-sues-new-york-times-15-billion-dollars-00565191",
      "urlToImage": "https://www.politico.com/dims4/default/resize/1200/quality/90/format/jpg?url=https%3A%2F%2Fstatic.politico.com%2Ffa%2F31%2F75ec71464ba48c1520b700772db1%2Ftrump-07268.jpg",
      "publishedAt": "2025-09-16T14:37:27Z",
      "content": "The New York Times has been allowed to freely lie, smear, and defame me for far too long, and that stops, NOW! he added.\r\nTrumps suit names The New York Times Company, four of the publications report… [+1383 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Annika Kim Constantino",
      "title": "Eli Lilly to build $5 billion Virginia facility to boost production of targeted cancer drugs, other treatments - CNBC",
      "description": "The Eli Lilly plant is the first of four planned U.S. manufacturing sites, which are expected to begin making medicines within five years.",
      "url": "https://www.cnbc.com/2025/09/16/eli-lilly-to-build-5-billion-virginia-manufacturing-facility.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/108184894-17550206822025-08-12t173750z_397057516_rc26lz9i31dr_rtrmadp_0_usa-texas-eli-lilly.jpeg?v=1758034387&w=1920&h=1080",
      "publishedAt": "2025-09-16T14:30:01Z",
      "content": "Eli Lilly on Tuesday said it will spend $5 billion to build a manufacturing facility in Goochland County, Virginia, to boost production capacity for targeted cancer drugs and other treatments the fir… [+4311 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Kash Patel, FBI director, facing questions on Charlie Kirk investigation at Congress - BBC",
      "description": "Patel announced on Wednesday that \"the subject\" was in custody, before backtracking - he later said he could have \"worded it better\".",
      "url": "https://www.bbc.com/news/live/c04qenww53pt",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/c082/live/f657e7f0-92fe-11f0-97fb-076dbede0ddc.jpg",
      "publishedAt": "2025-09-16T14:26:15Z",
      "content": "Bernd Debusmann JrReporting from Washington DC\r\nOver the past two days, we've seen Kash Patel become the focus of mounting criticism for his handling of the Charlie Kirk assassination - to which he's… [+1259 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NPR"
      },
      "author": "The Associated Press",
      "title": "A U.N. inquiry accuses Israel of genocide in Gaza, joining a rising chorus - NPR",
      "description": "The report issued Tuesday by experts commissioned by the United Nations' Human Rights Council calls on the international community to end the genocide and take steps to punish those responsible.",
      "url": "https://www.npr.org/2025/09/16/g-s1-89014/israel-gaza-genocide-un-inquiry",
      "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/1024x576+0+86/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fd6%2F5d%2F35b5de064771b44ee6e365ab53a8%2Fap25259231905262.jpg",
      "publishedAt": "2025-09-16T14:26:15Z",
      "content": "GENEVA A team of independent experts commissioned by the United Nations' Human Rights Council has concluded that Israel is committing genocide in Gaza, issuing a report Tuesday that calls on the inte… [+6380 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Abbie Cheeseman, Louisa Loveluck, Lior Soroka, Adam Taylor",
      "title": "Israeli military begins ground invasion of Gaza City - The Washington Post",
      "description": "Palestinians in Gaza City reported a night of heavy bombardment. A U.N. commission said Israel was committing genocide in Gaza; Israel rejected it as “falsehoods.”",
      "url": "https://www.washingtonpost.com/world/2025/09/16/israel-gaza-city-ground-invasion/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CGAQOGGHGIWC4GACEKP6ZRF5AI_size-normalized.jpg&w=1440",
      "publishedAt": "2025-09-16T14:11:20Z",
      "content": "The Israeli military launched the early stages of a ground offensive to seize Gaza City overnight, an Israeli military official said Tuesday, as Palestinians in the enclave said they faced a night of… [+29 chars]"
    }
]
    }
  }
  render() {
    return (
      <>
        <div className="row">
            {this.state.content.slice(0,3).map((con, i) => (
                <div className="col" key={i}>
                    <NewsItems title={con.title} desc={con.description} Url={con.url} imageUrl={con.urlToImage}/>
                </div>
            ))}
        </div>
        <div className="row mt-5">
            {this.state.content.slice(3,6).map((con, i) => (
                <div className="col" key={i+3}>
                    <NewsItems title={con.title} desc={con.description} Url={con.url} imageUrl={con.urlToImage}/>
                </div>
            ))}
        </div>
      </>
    );
  }
}

export default NewsComp;
