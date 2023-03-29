import { ADD_SOCIAL, REMOVE_SOCIAL, UPDATE_SOCIAL } from "../actions/actionType"

const initialState = {
    selected: [
        {
            socialID: "Facebook",
            website: "https://www.facebook.com",
            source: "https://cuberootdigital.in/icons/facebook.png",
			
            value: ""
        },
        {
            socialID: "Twitter",
            website: "https://www.twitter.com",
            source: "https://cuberootdigital.in/icons/twitter.png",
            value: ""
        },
        {
            socialID: "LinkedIn",
            website: "https://www.linkedin.com",
            source: "https://cuberootdigital.in/icons/linkedin.png",
            value: ""
        }
    ],
    otherSocials: [
        {
            socialID: "Instagram",
            website: "https://www.instagram.com",
            source: "https://cuberootdigital.in/icons/instagram.png"
        },
        {
            socialID: "Pinterest",
            website: "https://www.pinterest.com",
            source: "https://cuberootdigital.in/icons/pinterest.png"
        },
        {
            socialID: "Youtube",
            website: "https://www.youtube.com",
            source: "https://cuberootdigital.in/icons/youtube.png"
        },
        {
            socialID: "Google+",
            website: "https://plus.google.com/+id",
            source: "https://cuberootdigital.in/icons/google-plus.png"
        },
        {
            socialID: "Hangouts",
            website: "https://hangouts.google.com/",
            source: "https://cuberootdigital.in/icons/hangouts.png",
        },
        {
            socialID: "Google Play",
            website: "https://play.google.com/store",
            source: "https://cuberootdigital.in/icons/google-play.png"
        },
        {
            socialID: "Tumblr",
            website: "https://www.tumblr.com",
            source: "https://cuberootdigital.in/icons/tumblr.png"
        },
        {
            socialID: "TripAdvisor",
            website: "https://www.tripadvisor.com/id",
            source: "https://cuberootdigital.in/icons/tripadvisor.png"
        },
        {
            socialID: "Github",
            website: "https://www.github.com",
            source: "https://cuberootdigital.in/icons/github.png"
        },
        {
            socialID: "Gitlab",
            website: "https://www.gitlab.com/id",
            source: "https://cuberootdigital.in/icons/gitlab.png"
        },
        {
            socialID: "Snapchat",
            website: "https://www.snapchat.com",
            source: "https://cuberootdigital.in/icons/snapchat.png"
        },
        {
            socialID: "StackOverFlow",
            website: "https://www.stackoverflow.com/users/id",
            source: "https://cuberootdigital.in/icons/stack-overflow.png"
        },
        {
            socialID: "Quora",
            website: "https://www.quora.com/id",
            source: "https://cuberootdigital.in/icons/quora.png"
        },
        {
            socialID: "Behance",
            website: "https://www.behance.net/id",
            source: "https://cuberootdigital.in/icons/behance.png"
        },
        {
            socialID: "Medium",
            website: "https://www.medium.com/@id",
            source: "https://cuberootdigital.in/icons/medium.png"
        },
        {
            socialID: "Yelp",
            website: "https://www.yelp.com/user_details?userid=id",
            source: "https://cuberootdigital.in/icons/yelp.png"
        },
        {
            socialID: "QQ",
            website: "https://www.qq.com/",
            source: "https://cuberootdigital.in/icons/qq.png"
        },
        {
            socialID: "Skype",
            website: "https://www.skype.com/",
            source: "https://cuberootdigital.in/icons/skype.png"
        },
        {
            socialID: "Slack",
            website: "https://team.slack.com/",
            source: "https://cuberootdigital.in/icons/slack.png"
        },
        {
            socialID: "Flickr",
            website: "https://www.flickr.com/people/id",
            source: "https://cuberootdigital.in/icons/flickr.png"
        },
        {
            socialID: "Google Docs",
            website: "https://docs.google.com/file/d/id",
            source: "https://cuberootdigital.in/icons/google-drive.png"
        },
        {
            socialID: "Reverb Nation",
            website: "https://www.reverbnation.com/id",
            source: "https://cuberootdigital.in/icons/reverbnation.png"
        },
        {
            socialID: "Deviant Art",
            website: "https://id.deviantart.com",
            source: "https://cuberootdigital.in/icons/devianart.png"
        },
        {
            socialID: "Viadeo",
            website: "https://vieadeo.com/profile/id",
            source: "https://cuberootdigital.in/icons/viadeo.png"
        },
        {
            socialID: "Nextdoor",
            website: "https://www.nextdoor.com/agency-detail/id",
            source: "https://cuberootdigital.in/icons/nextdoor.png"
        },
        {
            socialID: "Vine",
            website: "https://vine.co/id",
            source: "https://cuberootdigital.in/icons/vine.png"
        },
        {
            socialID: "Stumble Upon",
            website: "https://www.stumbleupon.com",
            source: "https://cuberootdigital.in/icons/stumbleupon.png"
        },
        {
            socialID: "Weibo",
            website: "https://weibo.com",
            source: "https://cuberootdigital.in/icons/weibo.png"
        },
        {
            socialID: "Wechat",
            website: "https://wechat.com",
            source: "https://cuberootdigital.in/icons/wechat.png"
        },
        {
            socialID: "Zillow",
            website: "https://zillo.com/user/id",
            source: "https://cuberootdigital.in/icons/zillow.png"
        },
        {
            socialID: "Ello",
            website: "https://ello.co/id",
            source: "https://cuberootdigital.in/icons/ello.png"
        },
        {
            socialID: "Slideshare",
            website: "https://slideshare.com/id",
            source: "https://cuberootdigital.in/icons/slideshare.png"
        },
        {
            socialID: "500px",
            website: "https://500px.com/id",
            source: "https://cuberootdigital.in/icons/500px.png"
        },
        {
            socialID: "Picasa",
            website: "https://picasaweb.google.com/id",
            source: "https://cuberootdigital.in/icons/picasa.png"
        },
        {
            socialID: "Blogger",
            website: "https://blogger.com/profile/id",
            source: "https://cuberootdigital.in/icons/blogger.png"
        },
        {
            socialID: "Myspace",
            website: "https://myspace.com/id",
            source: "https://cuberootdigital.in/icons/myspace.png"
        },
        {
            socialID: "Wordpress",
            website: "https://wordpress.com/",
            source: "https://cuberootdigital.in/icons/wordpress.png"
        },
        {
            socialID: "Trulia",
            website: "https://trulia.com/id",
            source: "https://cuberootdigital.in/icons/trulia.png"
        },
        {
            socialID: "Renren",
            website: "https://renren-inc.com/",
            source: "https://cuberootdigital.in/icons/renren.png"
        },
        {
            socialID: "Ravelry",
            website: "https://ravelry.com/",
            source: "https://cuberootdigital.in/icons/ravelry.png"
        },
        {
            socialID: "Dribble",
            website: "https://dribble.com/id",
            source: "https://cuberootdigital.in/icons/dribble.png"
        },
        {
            socialID: "Vimeo",
            website: "https://vimeo.com/id",
            source: "https://cuberootdigital.in/icons/vimeo.png"
        },
        {
            socialID: "Snapchat",
            website: "https://snapchat.com/add/id",
            source: "https://cuberootdigital.in/icons/snapchat.png"
        },
        {
            socialID: "VK",
            website: "https://vk.com/id",
            source: "https://cuberootdigital.in/icons/vk.png"
        },
        {
            socialID: "OK",
            website: "https://ok.ru/profile/id",
            source: "https://cuberootdigital.in/icons/odnoklassniki.png"
        },
        {
            socialID: "IMDB",
            website: "https://imdb.com/name/id",
            source: "https://cuberootdigital.in/icons/imdb.png"
        },
        {
            socialID: "Myspace",
            website: "https://myspace.com/id",
            source: "https://cuberootdigital.in/icons/myspace.png"
        },
        {
            socialID: "Line",
            website: "https://line.me/r/id",
            source: "https://cuberootdigital.in/icons/line.png"
        },
        {
            socialID: "Viber",
            website: "https://viber.me/id",
            source: "https://cuberootdigital.in/icons/viber.png"
        },
        {
            socialID: "Whatsapp",
            website: "https://chat.whatsapp.com/id",
            source: "https://cuberootdigital.in/icons/whatsapp.png"
        },
        {
            socialID: "Kickstarter",
            website: "https://kickstarter.com/projects/id",
            source: "https://cuberootdigital.in/icons/kickstarter.png"
        },
        {
            socialID: "Upwork",
            website: "https://upwork.com/o/profiles/users/id",
            source: "https://cuberootdigital.in/icons/upwork.png"
        },
        {
            socialID: "Producthunt",
            website: "https://producthunt.com/@id",
            source: "https://cuberootdigital.in/icons/product-hunt.png"
        },
        {
            socialID: "Calendy",
            website: "https://calendy.com/@id",
            source: "https://cuberootdigital.in/icons/calendly.png"
        },
        {
            socialID: "Homify",
            website: "https://www.homify.com/@id",
            source: "https://cuberootdigital.in/icons/homify.png"
        },
        {
            socialID: "Airbnb",
            website: "https://www.airbnb.com/@id",
            source: "https://cuberootdigital.in/icons/airbnb.png"
        },
        {
            socialID: "Shopify",
            website: "https://www.shopify.com/@id",
            source: "https://cuberootdigital.in/icons/shopify.png"
        },
        {
            socialID: "Angellist",
            website: "https://angel.co/id",
            source: "https://cuberootdigital.in/icons/angellist.png"
        },
        {
            socialID: "Diaspora",
            website: "https://joindiaspora.com/people/id",
            source: "https://cuberootdigital.in/icons/diaspora.png"
        },
        {
            socialID: "Xing",
            website: "https://xing.com/profile/id",
            source: "https://cuberootdigital.in/icons/xing.png"
        },
        {
            socialID: "Houzz",
            website: "https://houzz.com/user/id",
            source: "https://cuberootdigital.in/icons/houzz.png"
        },
        {
            socialID: "Telegram",
            website: "https://telegram.me/id",
            source: "https://cuberootdigital.in/icons/telegram.png"
        },
        {
            socialID: "Reddit",
            website: "https://reddit.com/user/id",
            source: "https://cuberootdigital.in/icons/reddit.png"
        },
        {
            socialID: "Gitter",
            website: "https://gitter.im/id/chat",
            source: "https://cuberootdigital.in/icons/gitter.png"
        },
        {
            socialID: "Meetup",
            website: "https://meetup.com/id",
            source: "https://cuberootdigital.in/icons/meetup.png"
        },
        {
            socialID: "Ebay",
            website: "https://ebay.com/user/id",
            source: "https://cuberootdigital.in/icons/ebay.png"
        },
        {
            socialID: "Foursquare",
            website: "https://foursquare.com/user/id",
            source: "https://cuberootdigital.in/icons/foursquare.png"
        },
        {
            socialID: "Drupal",
            website: "https://drupal.org/",
            source: "https://cuberootdigital.in/icons/drupal.png"
        },
        {
            socialID: "Bitbucket",
            website: "https://bitbucket.org/user/id",
            source: "https://cuberootdigital.in/icons/bitbucket.png"
        },
        {
            socialID: "SoundCloud",
            website: "https://soundcloud.com/id",
            source: "https://cuberootdigital.in/icons/soundcloud.png"
        },
        {
            socialID: "Mixcloud",
            website: "https://mixcloud.com/id",
            source: "https://cuberootdigital.in/icons/mixcloud.png"
        },
        {
            socialID: "Patreon",
            website: "https://patreon.com/id",
            source: "https://cuberootdigital.in/icons/patreon.png"
        },
        {
            socialID: "Spotify",
            website: "https://open.spotify.com/user/id",
            source: "https://cuberootdigital.in/icons/spotify.png"
        },
        {
            socialID: "Apple music",
            website: "https://itunes.apple.com/app/id",
            source: "https://cuberootdigital.in/icons/appstore.png"
        },
        {
            socialID: "Amazon",
            website: "https://amazon.com/gp/profile/id",
            source: "https://cuberootdigital.in/icons/amazon.png"
        },
        {
            socialID: "Etsy",
            website: "https://etsy.com/shop/id",
            source: "https://cuberootdigital.in/icons/etsy.png"
        },
        {
            socialID: "Tinder",
            website: "https://tinder.com/id",
            source: "https://cuberootdigital.in/icons/tinder.png"
        },
        {
            socialID: "Netflix",
            website: "https://netflix.com/title/id",
            source: "https://cuberootdigital.in/icons/netflix.png"
        },
        {
            socialID: "Wikipedia",
            website: "https://wikipedia.org/wiki/id",
            source: "https://cuberootdigital.in/icons/wikipedia.png"
        },
        {
            socialID: "Bitcoin",
            website: "https://bitcoin.com/",
            source: "https://cuberootdigital.in/icons/bitcoin.png"
        },
        {
            socialID: "Discord",
            website: "https://discord.gg/id",
            source: "https://cuberootdigital.in/icons/discord.png"
        },
        {
            socialID: "Your Site",
            website: "https://your-site.com/feed.xml",
            source: "https://cuberootdigital.in/icons/rss.png"
        },
        {
            socialID: "Your-site",
            website: "https://www.your-site.com/",
            source: "https://cuberootdigital.in/icons/link.png"
        },
        {
            socialID: "location",
            website: "https://location",
            source: "https://cuberootdigital.in/icons/location.png"
        },
        {
            socialID: "location",
            website: "https://location",
            source: "https://cuberootdigital.in/icons/map.png"
        },
        {
            socialID: "location",
            website: "https://location",
            source: "https://cuberootdigital.in/icons/google-maps.png"
        },
    ]
}

const socialReducer = (prevState = initialState, action) => {
    switch(action.type) {
        case ADD_SOCIAL:
            let newOtherSocials = []
            let selectedSocial = null
            prevState.otherSocials.forEach((social) => {
                if(social.socialID !== action.socialID)
                    newOtherSocials.push(social)
                else selectedSocial = social
            })

            let newSocial = prevState.selected
            newSocial.push({
                socialID: action.socialID,
                website: selectedSocial.website,
                source: selectedSocial.source,
                value: ''
            })

            
            return {
                ...prevState,
                selected: newSocial,
                otherSocials: newOtherSocials
            }

        case REMOVE_SOCIAL: 

            if(action.socialID === null){
                return {
                    ...initialState
                }
            }
            
            let newSelected = []
            let unselectedSocial = null
            prevState.selected.forEach((social) => {
                if(social.socialID !== action.socialID)
                    newSelected.push(social)
                else unselectedSocial = social
            })

            let newOtherSocial = prevState.otherSocials
            newOtherSocial.push({
                socialID: action.socialID,
                website: unselectedSocial.website,
                source: unselectedSocial.source
            })

            
            return {
                ...prevState,
                selected: newSelected,
                otherSocials: newOtherSocial
            }


        case UPDATE_SOCIAL:
        
            let currSocial = []
            prevState.selected.forEach((social) => {
                if(social.socialID === action.socialID){
                    let newValue = JSON.stringify(social)
                    let newObject = JSON.parse(newValue)
                    newObject['value'] = action.value
                    currSocial.push(newObject)
                }
                else currSocial.push(social)

            }) 

            return {
                ...prevState,
                selected: currSocial
            }
        
        default: return prevState
    }
}

export default socialReducer