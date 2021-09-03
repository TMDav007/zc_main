import React from 'react'
import styles from './ResourcesSectionFour.module.css'

function ResourcesSectionFour() {
  let productList = ['Features', 'Integrations', 'Enterprise', 'Solution']
  let whySlackList = ['Slack vs Email', 'Channels', 'Engagement', 'Scale', 'Watch the demo']
  const pricingList = ['Plans','Paid vs Free']
  const resourceList = ['Partners', 'Developers', 'Apps' ]
  const partnerList = ['Blogs', 'Help Center', 'Events']
  const companyList = ['About us', 'Leadership','Investor Relations', 'News', 'Career', 'Media Kit']

  const otherList = ['Status', 'Privacy', 'Terms', 'Cookie', 'Preferences', 'Contact Us', 'Change', 'Region']

  const ProductList = ({ name, productArray }) => {
    return (
      <>
        <h4 className={styles.product_name}>{name}</h4>
        <ul>
          {productArray.map((product, key) => (
            <li key={key}>{product}</li>
          ))}
        </ul>
      </>
    )
  }

  const OtherList = ({ otherList}) => {
      return (
          <>
            <ul className={styles.other_list}>
                {otherList.map((other, key)=> (
                    <li key={key}>{other}</li>
                ))}
            </ul>
          </>
      )
  }

  return (
    <div className={styles.container}>
        <div className={styles.divider}>
            <img src="divider.svg" alt="" />
        </div>
      <h3 className={styles.intro}>
        Discover the only skill-building platform designed for learners and L&D
        professionals
      </h3>

      <div className={styles.section_one}>
        <div className={styles.description_one}>
          <h3>
            Leading organizations share their tips for supporting workplace
            collaboration—no matter where or when that work happens
          </h3>
          <img src="resourceimage4a.png" alt="" />
          <div className={styles.icon_container}>
            <div className={styles.like}>
              <i className="far fa-thumbs-up"></i>
              <h3>Likes</h3>
            </div>
            <div className={styles.comment}>
              <i className="far fa-comment-alt"></i>
              <h3>Comments</h3>
            </div>
          </div>
        </div>
        <div className={styles.description_two}>
          <h3>
            Leading organizations share their tips for supporting workplace
            collaboration—no matter where or when that work happens
          </h3>
          <img src="resourceimage4b.png" />
          <div className={styles.icon_container}>
            <div className={styles.like}>
              <i className="far fa-thumbs-up"></i>
              <h3>Likes</h3>
            </div>
            <div className={styles.comment}>
              <i className="far fa-comment-alt"></i>
              <h3>Comments</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section_two}>
        <div className={styles.header}>
          <img src="logo.svg" />
          <div className={styles.header_description}>
            <h3>Try Zuri Chat with your team for free.</h3>
            <h5>Get Started</h5>
          </div>
        </div>
      </div>

      <div className={styles.section_three}>
        <div className={styles.products_container}>
          <div className={styles.product}>
            <ProductList name="Why Slack" productArray={whySlackList} />
          </div>
          <div className={styles.product}>
            <ProductList name="Product" productArray={productList} />
          </div>
          <div className={styles.product}>
            <ProductList name="Pricing" productArray={pricingList} />
          </div>
          <div className={styles.product}>
            <ProductList name="Resources" productArray={resourceList} />
          </div>
          <div className={styles.product}>
            <ProductList name="Partner" productArray={partnerList} />
          </div>
          <div className={styles.product}>
            <ProductList name="Company" productArray={companyList} />
          </div>
        </div>
      </div>

      <div className={styles.section_four}>
          <img src="getApp.svg" alt="" />
          <div className={styles.footer_body}>
                <div className={styles.footer_others}>
                    <OtherList otherList={otherList} />
                </div>
                <div className={styles.footer_download}>
                    <h4>Download Zuri</h4>
                    <div className={styles.icons_box}>
                        <img src="facebook-icon.svg" alt="" />
                        <img src="twitter-icon.svg" alt="" />
                        <img src="instagram-icon.svg" alt="" />
                        <img src="youtube-icon.svg" alt="" />
                    </div>
                </div>
          </div>
          <p>©2021 Slack Technologies, LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owners.</p>
      </div>
    </div>
  )
}

export default ResourcesSectionFour
