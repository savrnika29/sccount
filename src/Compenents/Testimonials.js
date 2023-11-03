import React from "react";
import { user } from "./imgUrl";
import OwlCarousel from "react-owl-carousel";



export const Review = () => {
  return (
    <div>
    <h1 className="top-heading-section mb-5">Review</h1>
    <OwlCarousel
      className="owl-theme-1"
      loop
      margin={10}
      items={3}
      dots={true}
      nav={true}
      navText={[
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>",
      ]}
    >
      <div className="review-item py-5">
        <img src={user} alt="" />
        <h4 className="mt-4 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          porta, ipsum eget fringilla aliquet, ex arcu molestie purus, eget
          molestie nibh neque eu orci.
        </h4>
        <div className="d-flex gap-2 my-2">
          <span className="fal fa-star checked"></span>
          <span className="fal fa-star checked"></span>
          <span className="fal fa-star checked"></span>
          <span className="fal fa-star"></span>
          <span className="fal fa-star"></span>
        </div>

        <h5 className="mb-0">John Doe</h5>
        <p>Sales Designer</p>
      </div>
    </OwlCarousel>
  </div>
  )
}




const Testimonials = () => {
  return (
    <div>
      <h1 className="top-heading-section my-5">
        Client <br /> <span>Testimonials</span>
      </h1>

      <OwlCarousel
        className="owl-theme-1"
        loop
        margin={20}
        items={1.5}
        dots={true}
        nav={true}
        navText={["", "<i class='fas fa-chevron-right'></i>"]}
      >
        <div className="item py-5">
          <div className="py-5">
            <svg
              width="54"
              height="41"
              viewBox="0 0 54 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3333 16.6666C11.7387 16.6666 11.168 16.7572 10.6 16.8399C10.784 16.2212 10.9733 15.5919 11.2773 15.0266C11.5813 14.2052 12.056 13.4932 12.528 12.7759C12.9227 11.9999 13.6187 11.4746 14.1307 10.8106C14.6667 10.1652 15.3973 9.73591 15.976 9.19991C16.544 8.63991 17.288 8.35991 17.88 7.96525C18.4987 7.61058 19.0373 7.21858 19.6133 7.03191L21.0507 6.43991L22.3147 5.91458L21.0213 0.746582L19.4293 1.13058C18.92 1.25858 18.2987 1.40791 17.592 1.58658C16.8693 1.71991 16.0987 2.08525 15.24 2.41858C14.392 2.79725 13.4107 3.05325 12.4987 3.66125C11.5813 4.24258 10.5227 4.72791 9.58933 5.50658C8.68533 6.30925 7.59467 7.00525 6.78933 8.02658C5.90933 8.98125 5.04 9.98391 4.36533 11.1252C3.584 12.2132 3.05333 13.4079 2.49333 14.5892C1.98666 15.7706 1.57867 16.9786 1.24533 18.1519C0.613332 20.5039 0.330665 22.7386 0.221331 24.6506C0.130665 26.5652 0.183998 28.1572 0.295998 29.3092C0.335998 29.8532 0.410665 30.3812 0.463998 30.7466L0.530665 31.1946L0.599998 31.1786C1.07429 33.3941 2.16614 35.4301 3.74923 37.0511C5.33233 38.672 7.34198 39.8116 9.5457 40.3381C11.7494 40.8646 14.0572 40.7564 16.202 40.0261C18.3468 39.2958 20.2411 37.9732 21.6656 36.2113C23.0902 34.4494 23.9868 32.3202 24.2518 30.07C24.5168 27.8198 24.1393 25.5406 23.163 23.496C22.1867 21.4513 20.6516 19.7249 18.7351 18.5163C16.8186 17.3077 14.5991 16.6664 12.3333 16.6666ZM41.6667 16.6666C41.072 16.6666 40.5013 16.7572 39.9333 16.8399C40.1173 16.2212 40.3067 15.5919 40.6107 15.0266C40.9147 14.2052 41.3893 13.4932 41.8613 12.7759C42.256 11.9999 42.952 11.4746 43.464 10.8106C44 10.1652 44.7307 9.73591 45.3093 9.19991C45.8773 8.63991 46.6213 8.35991 47.2133 7.96525C47.832 7.61058 48.3707 7.21858 48.9467 7.03191L50.384 6.43991L51.648 5.91458L50.3547 0.746582L48.7627 1.13058C48.2533 1.25858 47.632 1.40791 46.9253 1.58658C46.2027 1.71991 45.432 2.08525 44.5733 2.41858C43.728 2.79991 42.744 3.05325 41.832 3.66391C40.9147 4.24525 39.856 4.73058 38.9227 5.50925C38.0187 6.31191 36.928 7.00792 36.1227 8.02658C35.2427 8.98125 34.3733 9.98391 33.6987 11.1252C32.9173 12.2132 32.3867 13.4079 31.8267 14.5892C31.32 15.7706 30.912 16.9786 30.5787 18.1519C29.9467 20.5039 29.664 22.7386 29.5547 24.6506C29.464 26.5652 29.5173 28.1572 29.6293 29.3092C29.6693 29.8532 29.744 30.3812 29.7973 30.7466L29.864 31.1946L29.9333 31.1786C30.4076 33.3941 31.4995 35.4301 33.0826 37.0511C34.6657 38.672 36.6753 39.8116 38.879 40.3381C41.0828 40.8646 43.3905 40.7564 45.5353 40.0261C47.6802 39.2958 49.5744 37.9732 50.999 36.2113C52.4235 34.4494 53.3201 32.3202 53.5851 30.07C53.8501 27.8198 53.4726 25.5406 52.4964 23.496C51.5201 21.4513 49.9849 19.7249 48.0684 18.5163C46.1519 17.3077 43.9324 16.6664 41.6667 16.6666Z"
                fill="black"
              />
            </svg>

            <h4 className="mt-4 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              porta, ipsum eget fringilla aliquet, ex arcu molestie purus, eget
              molestie nibh neque eu orci.
            </h4>
            <img src={user} alt="" />
            <h5 className="mb-0">John Doe</h5>
            <p>Sales Designer</p>
          </div>
        </div>
        <div className="item py-5">
          <div className="py-5">
            <svg
              width="54"
              height="41"
              viewBox="0 0 54 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3333 16.6666C11.7387 16.6666 11.168 16.7572 10.6 16.8399C10.784 16.2212 10.9733 15.5919 11.2773 15.0266C11.5813 14.2052 12.056 13.4932 12.528 12.7759C12.9227 11.9999 13.6187 11.4746 14.1307 10.8106C14.6667 10.1652 15.3973 9.73591 15.976 9.19991C16.544 8.63991 17.288 8.35991 17.88 7.96525C18.4987 7.61058 19.0373 7.21858 19.6133 7.03191L21.0507 6.43991L22.3147 5.91458L21.0213 0.746582L19.4293 1.13058C18.92 1.25858 18.2987 1.40791 17.592 1.58658C16.8693 1.71991 16.0987 2.08525 15.24 2.41858C14.392 2.79725 13.4107 3.05325 12.4987 3.66125C11.5813 4.24258 10.5227 4.72791 9.58933 5.50658C8.68533 6.30925 7.59467 7.00525 6.78933 8.02658C5.90933 8.98125 5.04 9.98391 4.36533 11.1252C3.584 12.2132 3.05333 13.4079 2.49333 14.5892C1.98666 15.7706 1.57867 16.9786 1.24533 18.1519C0.613332 20.5039 0.330665 22.7386 0.221331 24.6506C0.130665 26.5652 0.183998 28.1572 0.295998 29.3092C0.335998 29.8532 0.410665 30.3812 0.463998 30.7466L0.530665 31.1946L0.599998 31.1786C1.07429 33.3941 2.16614 35.4301 3.74923 37.0511C5.33233 38.672 7.34198 39.8116 9.5457 40.3381C11.7494 40.8646 14.0572 40.7564 16.202 40.0261C18.3468 39.2958 20.2411 37.9732 21.6656 36.2113C23.0902 34.4494 23.9868 32.3202 24.2518 30.07C24.5168 27.8198 24.1393 25.5406 23.163 23.496C22.1867 21.4513 20.6516 19.7249 18.7351 18.5163C16.8186 17.3077 14.5991 16.6664 12.3333 16.6666ZM41.6667 16.6666C41.072 16.6666 40.5013 16.7572 39.9333 16.8399C40.1173 16.2212 40.3067 15.5919 40.6107 15.0266C40.9147 14.2052 41.3893 13.4932 41.8613 12.7759C42.256 11.9999 42.952 11.4746 43.464 10.8106C44 10.1652 44.7307 9.73591 45.3093 9.19991C45.8773 8.63991 46.6213 8.35991 47.2133 7.96525C47.832 7.61058 48.3707 7.21858 48.9467 7.03191L50.384 6.43991L51.648 5.91458L50.3547 0.746582L48.7627 1.13058C48.2533 1.25858 47.632 1.40791 46.9253 1.58658C46.2027 1.71991 45.432 2.08525 44.5733 2.41858C43.728 2.79991 42.744 3.05325 41.832 3.66391C40.9147 4.24525 39.856 4.73058 38.9227 5.50925C38.0187 6.31191 36.928 7.00792 36.1227 8.02658C35.2427 8.98125 34.3733 9.98391 33.6987 11.1252C32.9173 12.2132 32.3867 13.4079 31.8267 14.5892C31.32 15.7706 30.912 16.9786 30.5787 18.1519C29.9467 20.5039 29.664 22.7386 29.5547 24.6506C29.464 26.5652 29.5173 28.1572 29.6293 29.3092C29.6693 29.8532 29.744 30.3812 29.7973 30.7466L29.864 31.1946L29.9333 31.1786C30.4076 33.3941 31.4995 35.4301 33.0826 37.0511C34.6657 38.672 36.6753 39.8116 38.879 40.3381C41.0828 40.8646 43.3905 40.7564 45.5353 40.0261C47.6802 39.2958 49.5744 37.9732 50.999 36.2113C52.4235 34.4494 53.3201 32.3202 53.5851 30.07C53.8501 27.8198 53.4726 25.5406 52.4964 23.496C51.5201 21.4513 49.9849 19.7249 48.0684 18.5163C46.1519 17.3077 43.9324 16.6664 41.6667 16.6666Z"
                fill="black"
              />
            </svg>

            <h4 className="mt-4 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              porta, ipsum eget fringilla aliquet, ex arcu molestie purus, eget
              molestie nibh neque eu orci.
            </h4>
            <img src={user} alt="" />
            <h5 className="mb-0">John Doe</h5>
            <p>Sales Designer</p>
          </div>
        </div>
        <div className="item py-5">
          <div className="py-5">
            <svg
              width="54"
              height="41"
              viewBox="0 0 54 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3333 16.6666C11.7387 16.6666 11.168 16.7572 10.6 16.8399C10.784 16.2212 10.9733 15.5919 11.2773 15.0266C11.5813 14.2052 12.056 13.4932 12.528 12.7759C12.9227 11.9999 13.6187 11.4746 14.1307 10.8106C14.6667 10.1652 15.3973 9.73591 15.976 9.19991C16.544 8.63991 17.288 8.35991 17.88 7.96525C18.4987 7.61058 19.0373 7.21858 19.6133 7.03191L21.0507 6.43991L22.3147 5.91458L21.0213 0.746582L19.4293 1.13058C18.92 1.25858 18.2987 1.40791 17.592 1.58658C16.8693 1.71991 16.0987 2.08525 15.24 2.41858C14.392 2.79725 13.4107 3.05325 12.4987 3.66125C11.5813 4.24258 10.5227 4.72791 9.58933 5.50658C8.68533 6.30925 7.59467 7.00525 6.78933 8.02658C5.90933 8.98125 5.04 9.98391 4.36533 11.1252C3.584 12.2132 3.05333 13.4079 2.49333 14.5892C1.98666 15.7706 1.57867 16.9786 1.24533 18.1519C0.613332 20.5039 0.330665 22.7386 0.221331 24.6506C0.130665 26.5652 0.183998 28.1572 0.295998 29.3092C0.335998 29.8532 0.410665 30.3812 0.463998 30.7466L0.530665 31.1946L0.599998 31.1786C1.07429 33.3941 2.16614 35.4301 3.74923 37.0511C5.33233 38.672 7.34198 39.8116 9.5457 40.3381C11.7494 40.8646 14.0572 40.7564 16.202 40.0261C18.3468 39.2958 20.2411 37.9732 21.6656 36.2113C23.0902 34.4494 23.9868 32.3202 24.2518 30.07C24.5168 27.8198 24.1393 25.5406 23.163 23.496C22.1867 21.4513 20.6516 19.7249 18.7351 18.5163C16.8186 17.3077 14.5991 16.6664 12.3333 16.6666ZM41.6667 16.6666C41.072 16.6666 40.5013 16.7572 39.9333 16.8399C40.1173 16.2212 40.3067 15.5919 40.6107 15.0266C40.9147 14.2052 41.3893 13.4932 41.8613 12.7759C42.256 11.9999 42.952 11.4746 43.464 10.8106C44 10.1652 44.7307 9.73591 45.3093 9.19991C45.8773 8.63991 46.6213 8.35991 47.2133 7.96525C47.832 7.61058 48.3707 7.21858 48.9467 7.03191L50.384 6.43991L51.648 5.91458L50.3547 0.746582L48.7627 1.13058C48.2533 1.25858 47.632 1.40791 46.9253 1.58658C46.2027 1.71991 45.432 2.08525 44.5733 2.41858C43.728 2.79991 42.744 3.05325 41.832 3.66391C40.9147 4.24525 39.856 4.73058 38.9227 5.50925C38.0187 6.31191 36.928 7.00792 36.1227 8.02658C35.2427 8.98125 34.3733 9.98391 33.6987 11.1252C32.9173 12.2132 32.3867 13.4079 31.8267 14.5892C31.32 15.7706 30.912 16.9786 30.5787 18.1519C29.9467 20.5039 29.664 22.7386 29.5547 24.6506C29.464 26.5652 29.5173 28.1572 29.6293 29.3092C29.6693 29.8532 29.744 30.3812 29.7973 30.7466L29.864 31.1946L29.9333 31.1786C30.4076 33.3941 31.4995 35.4301 33.0826 37.0511C34.6657 38.672 36.6753 39.8116 38.879 40.3381C41.0828 40.8646 43.3905 40.7564 45.5353 40.0261C47.6802 39.2958 49.5744 37.9732 50.999 36.2113C52.4235 34.4494 53.3201 32.3202 53.5851 30.07C53.8501 27.8198 53.4726 25.5406 52.4964 23.496C51.5201 21.4513 49.9849 19.7249 48.0684 18.5163C46.1519 17.3077 43.9324 16.6664 41.6667 16.6666Z"
                fill="black"
              />
            </svg>

            <h4 className="mt-4 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              porta, ipsum eget fringilla aliquet, ex arcu molestie purus, eget
              molestie nibh neque eu orci.
            </h4>
            <img src={user} alt="" />
            <h5 className="mb-0">John Doe</h5>
            <p>Sales Designer</p>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Testimonials;