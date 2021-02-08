import React from "react";
import ProductCheckbox from "../components/ProductCheckbox";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../css/GrilledMenu.css";
import {
  saladsProducts,
  TypesOfBreads,
  TypesOfGrilled,
  ExtrasOfGrilled
} from "../Consts";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: "100%",
    height: "880px",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function GrilledMenu() {
  const classes = useStyles();
  return (
    <div className="headerEventsMenu">
      <div className="eventsMenuTitle">
        <h2>טופס הזמנה על האש</h2>
      </div>

      <div className="priceGrilledDivGrid">
        <Grid container>
          <Grid item xs={"auto"}>
            <Paper className={classes.paper}>
              <div className="eventsMenuDiv">
                <span>תפריט על האש</span>
              </div>

              <div className="eventsPrice">
                <span>₪</span>
                <span>140</span>
              </div>
              <div className="eventsSpanPrice">
                <span> -החל מ</span>
              </div>
              <br />
              <ul dir="rtl" className="ulTableEventsPrice">
                <li>
                  <div className="priceTableEvents">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      class="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <span className="spanEventsDetails">
                    7 סוגי סלטים (סלט נוסף בתוספת 3 ₪)
                    </span>
                  </div>
                </li>
                <li>
                  <div className="priceTableEvents">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      class="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <span className="spanEventsDetails">8 סוגי בשרים על גריל פחמים ישראלי ישר לשולחן. (לבחירה ללא הגבלה)</span>
                  </div>
                </li>
                <li>
                  <div className="priceTableEvents">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      class="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <span className="spanEventsDetails">מבחר סוגי לחמים + 2 תוספות</span>
                  </div>
                </li>
                <li>
                  <div className="priceTableEvents">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      class="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <span className="spanEventsDetails">הגשה לשולחן/ מזנון - בופה</span>
                  </div>
                </li>
                <li>
                  <div className="priceTableEvents">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      class="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <span className="spanEventsDetails">
                    עריכה בכלים חד פעמי קשיח ומהודר
ניתן לשדרג לכלי פורצלן יוקרתיים ומפות ומפיות מבד סאטן בתוספת 15 ₪
                    </span>
                  </div>
                </li>
                <li>
                  <div className="priceTableEvents">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      class="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <span className="spanEventsDetails">
                    שתיה קלה מסדרת קוקה קולה + עמדת שתיה חמה
                    </span>
                  </div>
                </li>
                <li>
                  <div className="priceTableEvents">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      class="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <span className="spanEventsDetails">
                    אבטיח מלון לקינוח (ניתן לשדרג לפרלינים ופטיפורים בתוספת תשלום)
                    </span>
                  </div>
                </li>
                <li>
                  <div className="priceTableEvents">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      class="bi bi-check2-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                      <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                    </svg>
                    <span className="spanEventsDetails">
                    יש באפשרותנו לספק לאירוע שלכם ציוד נלווה כגון שולחנות עגול או מרובע, כסאות עץ או פלסטיק, כיסוי מהודר לכיסאות, שמשוניות, מחיצות, מזגנים ניידים, אוהלים, פתרונות הצללה, סידור בלונים, סידור פרחים, כורסאות ישיבה פופים , שנדלירים תאורה וכל מה שעושה לכם טוב בארוע שלכם
                    </span>
                  </div>
                </li>
                
                <li>
                  <div className="priceTableEvents">
                    <span className="spanEventsDetails">
                      הובלה בתוספת תשלום
                    </span>
                  </div>
                </li>
              </ul>
              <div className="eventsPriceBottom">
                <div className="priceEventsTableBottomFooter">
                  * שינויים בתפריט עד 48 שעות קודם האירוע.
                  <br />
                  * תינתן מקדמה בסגירה והיתרה בזמן אספקת ההזמנה.
                  <br /> * לאחר סגירת ההזמנה יש לוודא שההזמנה התקבלה.
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className="inputEventsMenu">
        <Grid container>
          <Grid item xs={9}>
            <ProductCheckbox
              items = {
                (saladsProducts,
                TypesOfBreads,
                TypesOfGrilled,
                ExtrasOfGrilled)
              }
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default GrilledMenu;