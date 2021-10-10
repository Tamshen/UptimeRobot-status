import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>Data from <Link to="https://uptimerobot.com/" text="UptimeRobot" /> &copy; Made by <Link to="https://github.com/yb/uptime-status" text="uptime-status" /></p>
      </div>
    </div>
  );
}

export default Footer;
