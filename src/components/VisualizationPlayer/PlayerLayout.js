import React from 'react'
import styles from './player.layout.css'

const PlayerLayout = () => (
  <div className='wrapper'>
    <div className='header'>
      <div className='burger-wrapper'>
        <div className='burger' />
      </div>
      <div className='logo-text'>ex:reality</div>
      <div className='back_btn'>
        <div className='circle' />
        <div className='text'>Back</div>
      </div>
    </div>
    <div className='nav'>
      <ul className='nav_main'>
        <li> <a className='nav_link'>Home	</a></li>
        <li> <a className='nav_link'>Listeners</a></li>
        <li> <a className='nav_link'>Compilations</a></li>
        <li> <a className='nav_link'>LP. Mix</a></li>
      </ul>
      <div className='nav_divider' />
      <ul className='nav_sub'>
        <li><a className='nav_link' href>About	</a></li>
        <li><a className='nav_link' href>Contact	</a></li>
      </ul>
    </div>
    <div className='mini-player'>
      <div className='track_info_wrapper'>
        <div className='track_info'>
          <div className='info'>
            <div className='title'>Welcome to Xenon</div>
          </div>
        </div>
      </div>
      <div className='mini-player_btn_wrapper'><i className='btn-prev fa fa-step-backward' aria-hidden='true' />
        <div className='btn-switch'><i className='btn-play fa fa-play' aria-hidden='true' /><i className='btn-pause fa fa-pause' aria-hidden='true' /></div><i className='btn-next fa fa-step-forward' aria-hidden='true' /><i className='btn-open-player fa fa-list' aria-hidden='true' />
      </div>
    </div>
    <div className='dim' />
    <div className='player' id='player'>
      <div className='playback_wrapper'>
        <div className='playback_blur' />
        <div className='playback_thumb' />
        <div className='playback_info'>
          <div className='title'>Friday Comes</div>
          <div className='artist'>Early</div>
        </div>
        <div className='playback_btn_wrapper'><i className='btn-prev fa fa-step-backward' aria-hidden='true' />
          <div className='btn-switch'><i className='btn-play fa fa-play' aria-hidden='true' /><i className='btn-pause fa fa-pause' aria-hidden='true' /></div><i className='btn-next fa fa-step-forward' aria-hidden='true' />
        </div>
        <div className='playback_timeline'>
          <div className='playback_timeline_start-time'>00:31</div>
          <div className='playback_timeline_slider'>
            <div className='slider_base' />
            <div className='slider_progress' />
            <div className='slider_handle' />
          </div>
          <div className='playback_timeline_end-time'>03:11</div>
        </div>
      </div>
      <div className='list_wrapper'>
        <ul className='list'>
          <li className='list_item selected'>
            <div className='thumb'> </div>
            <div className='info'>
              <div className='title'>Friday Comes</div>
              <div className='artist'>Early</div>
            </div>
          </li>
          <li className='list_item'>
            <div className='thumb'> </div>
            <div className='info'>
              <div className='title'>Friday Comes</div>
              <div className='artist'>Early</div>
            </div>
          </li>
          <li className='list_item'>
            <div className='thumb'> </div>
            <div className='info'>
              <div className='title'>Friday Comes</div>
              <div className='artist'>Early</div>
            </div>
          </li>
          <li className='list_item'>
            <div className='thumb'> </div>
            <div className='info'>
              <div className='title'>Friday Comes</div>
              <div className='artist'>Early</div>
            </div>
          </li>
          <li className='list_item'>
            <div className='thumb'> </div>
            <div className='info'>
              <div className='title'>Friday Comes</div>
              <div className='artist'>Early</div>
            </div>
          </li>
          <li className='list_item'>
            <div className='thumb'> </div>
            <div className='info'>
              <div className='title'>Friday Comes</div>
              <div className='artist'>Early</div>
            </div>
          </li>
          <li className='list_item'>
            <div className='thumb'> </div>
            <div className='info'>
              <div className='title'>Friday Comes</div>
              <div className='artist'>Early</div>
            </div>
          </li>
          <li className='list_item'>
            <div className='thumb'> </div>
            <div className='info'>
              <div className='title'>Friday Comes</div>
              <div className='artist'>Early</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className='page' id='curator'>
      <div className='curator_title_wrapper'><span>LP</span>
        <div className='curator_line' />
        <div className='curator_title'>Listeners</div>
        <div className='curator_line' /><span>14</span>
      </div>
      <div className='curator_list'>
        <div className='curator_list_content'>
          <div className='connect_btn_wrapper item'>
            <div className='connect_btn'>
              <div className='connect_btn_text'>Connect <br />SoundCloud</div>
            </div>
          </div>
          <div className='curator_list_content_desc'>Or Select <br />a Listener of <br />L.P.			</div>
          <div className='item'>
            <div className='thumb' />
            <div className='info'>
              <div className='name'>Fantasy</div>
              <div className='desc'>Sam</div>
            </div>
          </div>
          <div className='item'>
            <div className='thumb' />
            <div className='info'>
              <div className='name'>Fantasy</div>
              <div className='desc'>Sam</div>
            </div>
          </div>
          <div className='item'>
            <div className='thumb' />
            <div className='info'>
              <div className='name'>Fantasy</div>
              <div className='desc'>Sam</div>
            </div>
          </div>
          <div className='item'>
            <div className='thumb' />
            <div className='info'>
              <div className='name'>Fantasy</div>
              <div className='desc'>Sam</div>
            </div>
          </div>
          <div className='item'>
            <div className='thumb' />
            <div className='info'>
              <div className='name'>Fantasy</div>
              <div className='desc'>Sam</div>
            </div>
          </div>
          <div className='item'>
            <div className='thumb' />
            <div className='info'>
              <div className='name'>Fantasy</div>
              <div className='desc'>Sam</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PlayerLayout
