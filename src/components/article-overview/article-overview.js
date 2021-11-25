/* Vendor imports */
import React from 'react'
import IconProblem from '../../images/icons/icon-problems'
import IconGoals from '../../images/icons/icon-goals'
import IconOutcomes from '../../images/icons/icon-outcomes'
import style from './article-overview.module.scss'
import useTranslations from "../useTranslations"

const ArticleOverview = ({ type, ...props }) => {

    let overviewObj = {}
    const t = useTranslations()

    if(props.children.length)
    {
        overviewObj =
        props.children.reduce((items, item, index) => {
            items[`${item.props.mdxType}`] = item.props.children
          return items;
        }, {});
    }else{
        overviewObj.Sunnary = props.children.props.children
    }


    return(
    <div className={style.articleContainer}>
       
            <div className={style.articleInnerContainer}>
                {overviewObj.Announcement ? (
                    <div className={style.articleAnnouncement}>
                        {overviewObj.Announcement}
                    </div>
                ) : null}
                <div className={style.articleIntroduction}>
                    {overviewObj.Sunnary ? overviewObj.Sunnary : null}
                </div>
            {overviewObj.Problems && overviewObj.Goals && overviewObj.Outcomes ? (
                <div className={style.articleSunnary}>
                    <div>
                        <IconProblem/>
                        <h3>{t.articles.problems}</h3>
                        {overviewObj.Problems ? overviewObj.Problems : null}
                    </div>
                    <div>
                        <IconGoals/>
                        <h3>{t.articles.goals}</h3>
                        {overviewObj.Goals ? overviewObj.Goals : null}
                    </div>
                    <div>
                        <IconOutcomes/>
                        <h3>{t.articles.outcomes}</h3>
                        {overviewObj.Outcomes ? overviewObj.Outcomes : null}
                    </div>
                </div>
            ) : null}  

        </div>

    </div>

    )
   

    }


export default ArticleOverview