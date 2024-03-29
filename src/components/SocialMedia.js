import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Link } from "@mui/material";

const SocialMedia = () => {
  return (
    <Box
      sx={{
        margin: "50px 0px 100px 0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box className="social_media">
        <Link
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A//pocket.app.br/pbnews44/editorial.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon
            sx={{
              fontSize: 40,
              color: "gray",
              border: "3px solid #FFF",

              borderRadius: "11px",
            }}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//pocket.app.br/pbnews44/editorial.html&title=pbnews44&summary=&source="
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon
            sx={{
              fontSize: 40,
              color: "gray",
              border: "3px solid #FFF",

              borderRadius: "11px",
            }}
          />
        </Link>
        <Link
          href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fdeveloper.twitter.com%2F&ref_src=twsrc%5Etfw&related=twitterapi%2Ctwitter&tw_p=tweetbutton&url=https%3A%2F%2Fpocket.app.br%2Fpbnews44%2F#slide2&via=pblopes_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon
            sx={{
              fontSize: 40,
              color: "gray",
              border: "3px solid #FFF",
              borderRadius: "11px",
            }}
          />
        </Link>
      </Box>
      <Box sx={{ color: "gray", fontWeight: "700", fontSize: "15px" }}>
        <b>COMPARTILHE A PBNEWS</b>
      </Box>
    </Box>
  );
};

export default SocialMedia;
