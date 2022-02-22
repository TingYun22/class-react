import { EmailIcon, FacebookIcon, LineIcon, TwitterIcon } from 'react-share'
import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
} from 'react-share'

function SocialShare(props) {
  const { url, round } = props
  return (
    <>
      <EmailShareButton>
        <EmailIcon
          borderRadius={20}
          iconFillColor={'white'}
          bgStyle={{ fill: 'skyblue' }}
        />
      </EmailShareButton>
      <FacebookShareButton>
        <FacebookIcon round={round} url={url} />
      </FacebookShareButton>
      <LineShareButton>
        <LineIcon round={round} />
      </LineShareButton>
      <TwitterShareButton>
        <TwitterIcon round={round} />
      </TwitterShareButton>
    </>
  )
}

export default SocialShare
