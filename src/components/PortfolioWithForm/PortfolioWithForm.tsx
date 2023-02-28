import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ButtonPrimary } from './ButtonPrimary/ButtonPrimary';
import { ButtonSecondary } from './ButtonSecondary/ButtonSecondary';
import { FooterForm } from './FooterForm/FooterForm';
import { Header } from './Header/Header';
import classes from './PortfolioWithForm.module.css';
import { ProjectNfo } from './ProjectNfo/ProjectNfo';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { YellowBgIcon } from './YellowBgIcon';

interface Props {
  className?: string;
}
/* @figmaId 7:191 */
export const PortfolioWithForm: FC<Props> = memo(function PortfolioWithForm(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.image}>
        <div className={classes.yellowBg}>
          <YellowBgIcon className={classes.icon} />
        </div>
        <div className={classes.pexelsArtemBeliaikin1832323Rem}></div>
      </div>
      <Header />
      <div className={classes.projects}>
        <SectionTitle />
        <div className={classes.project1}>
          <ProjectNfo />
          <div className={classes.pexelsEllyFairytale38232071}></div>
        </div>
        <div className={classes.project2}>
          <div className={classes.rectangle7}></div>
          <ProjectNfo
            classes={{ frame3350: classes.frame3350 }}
            text={{
              text: (
                <div className={classes.text}>
                  What was your role, your deliverables, if the project was personal, freelancing.
                </div>
              ),
            }}
          />
        </div>
        <div className={classes.project3}>
          <ProjectNfo
            classes={{ frame3350: classes.frame33502 }}
            text={{
              text: (
                <div className={classes.text2}>
                  You can also add in this description the type of the project, if it was for web, mobile, electron.
                </div>
              ),
            }}
          />
          <div className={classes.rectangle72}></div>
        </div>
      </div>
      <div className={classes.intro}>
        <div className={classes.uIUXDesigner}>UI/UX Designer</div>
        <div className={classes.content}>
          <div className={classes.title}>Hello, my name is Madelyn Torff</div>
          <div className={classes.subheadline}>
            <div className={classes.text3}>
              Short text with details about you, what you do or your professional career. You can add more information
              on the about page.
            </div>
          </div>
          <div className={classes.buttons}>
            <ButtonPrimary />
            <ButtonSecondary />
          </div>
        </div>
      </div>
      <FooterForm />
    </div>
  );
});
