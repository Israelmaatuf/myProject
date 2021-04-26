import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import eventpic1 from "../images/EventImg1.jpeg";
import eventCarousel1 from "../images/Carousel/carouseleventpic1.jpeg";
import eventCarousel2 from "../images/Carousel/carouseleventpic2.jpeg";
import eventCarousel3 from "../images/Carousel/carouseleventpic3.jpeg";
import eventCarousel4 from "../images/Carousel/carouseleventpic4.jpeg";
import eventCarousel5 from "../images/Carousel/carouseleventpic5.jpeg";
import eventCarousel6 from "../images/Carousel/carouseleventpic6.jpeg";
import eventCarousel7 from "../images/Carousel/carouseleventpic7.jpeg";
import eventCarousel8 from "../images/Carousel/carouseleventpic8.jpeg";
import eventCarousel9 from "../images/Carousel/carouseleventpic9.jpeg";
import eventCarousel10 from "../images/Carousel/carouseleventpic10.jpeg";
import eventCarousel11 from "../images/Carousel/carouseleventpic11.jpeg";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "../css/EventsCatering.css";

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

function EventsCatering(props) {
  const { classes } = props;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div dir="rtl" className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div className="titleEvents">
            <h2 data-aos="fade-down" data-aos-duration="1000">
              קייטרינג אירועים
            </h2>

            <div className="eventsP">
              <p>
                תפריט אירועים כולל את מנות התפריט שתבחרו, ובנוסף שירות ניהול
              </p>
              <p>האירוע – הפקה, עריכה והגשה בצורה מקצועית</p>
              <br />
              <p>תוכלו לבחור מנות ראשונות, מנות פתיחה, עיקריות קינוחים, שתיה</p>
              <p>אלכוהול ולהתאים תפריט ברמת תמחור ומסגרות תקציב נוחות</p>
              <br />
              <p>
                כשאתם בוחרים בשף פנחס אתם יכולים להיות בטוחים שהכל יוגש בזמן
              </p>
              <p>ולשביעות רצון קהל המוזמנים</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <Link to="/EventMenu" className="buttonEvents">
                לתפריט והזמנה
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Image className="eventspic1" src={eventpic1}></Image>
        </Grid>
        <Grid item xs={12}>
          <div dir="ltr" className="CarouselImagesEvents">
            <Carousel
              swipeable={false}
              centerMode={true}
              showDots={true}
              responsive={responsive}
              autoPlay={props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={3000}
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              deviceType={props.deviceType}
              dotListClass="custom-dot-list-style"
              // itemClass="carousel-item-padding-10-px"
            >
              <Image className="imgEvents" src={eventCarousel1}></Image>
              <Image className="imgEvents" src={eventCarousel2}></Image>
              <Image className="imgEvents" src={eventCarousel3}></Image>
              <Image className="imgEvents" src={eventCarousel4}></Image>
              <Image className="imgEvents" src={eventCarousel5}></Image>
              <Image className="imgEvents" src={eventCarousel6}></Image>
              <Image className="imgEvents" src={eventCarousel7}></Image>
              <Image className="imgEvents" src={eventCarousel8}></Image>
              <Image className="imgEvents" src={eventCarousel9}></Image>
              <Image className="imgEvents" src={eventCarousel10}></Image>
              <Image className="imgEvents" src={eventCarousel11}></Image>
            </Carousel>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
EventsCatering.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(EventsCatering);
