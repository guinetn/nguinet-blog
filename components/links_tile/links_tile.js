import style from './links_tile.module.css'

export default function Links_Tile({ links }) {

  function parseLink(link) {
    /*
      https://developers.google.com/analytics → developers.google.com/analytics
      https://www.nasaspaceflight.com			    → nasaspaceflight.com 
      https://app.diagrams.net(draw.io)       → draw.io
      https://app.code2flow.com(code flow)    → code flow
    */
    const regex = /(?<link>[^\[\(]*)(\(+(?<description>[^\)]*)?\)+)*/;
    var match = regex.exec(link.trim().toLowerCase()); // ex: "https://gmail.com[fas fa-envelope](GMAIL)"
    if (match != null) {
      let url = match.groups["link"];
      let description = match.groups["description"];
    
      return {url, description};
    }
  }


  return (
    
    <div className={`box3d ${style.topicLinkContainer}`}>
      <h3 className={style.links_tile_title}>{links[0]}</h3>
      { 
        links.slice(1).map( (k,i)=> { 
          const {url, description} = parseLink(k);
          return (
            <div key={i}>
              <a href={url} key={`a-${i}`} className={style.topicLink} target="_blank">★ {description??url}</a>
            </div>)  
        })
      }
    </div>);
}
