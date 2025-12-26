import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // 检查本地存储中的主题设置
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            AI安全
          </Link>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navItem}>
              首页
            </Link>
            <Link href="/solutions" className={styles.navItem}>
              解决方案
            </Link>
            <Link href="/research" className={styles.navItem}>
              研究成果
            </Link>
            <Link href="/findings" className={styles.navItem}>
              研究发现
            </Link>
            <Link href="/resources" className={styles.navItem}>
              资源中心
            </Link>
            <Link href="/news" className={styles.navItem}>
              新闻动态
            </Link>
            <Link href="/about" className={styles.navItem}>
              关于我们
            </Link>
            <Link href="/contact" className={styles.navItem}>
              联系我们
            </Link>
            <Link href="/test" className={styles.navItem}>
              测试
            </Link>
          </nav>
        </div>
      </header>

      {/* 主题切换按钮 */}
      <button className="theme-toggle" onClick={toggleTheme} aria-label="切换主题">
        {theme === 'dark' ? (
          <svg viewBox="0 0 24 24">
            <path d="M12 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3m0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zM12 5c.552 0 1-.448 1-1V2c0-.552-.448-1-1-1s-1 .448-1 1v2c0 .552.448 1 1 1zM12 23c.552 0 1-.448 1-1v-2c0-.552-.448-1-1-1s-1 .448-1 1v2c0 .552.448 1 1 1zM18.364 7.636c.552 0 1-.448 1-1 0-.552-.448-1-1-1-.552 0-1 .448-1 1 0 .552.448 1 1 1zM19.78 6.22c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0zM16 12c0 .552.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1h-2c-.552 0-1 .448-1 1zM6 12c0 .552.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1H7c-.552 0-1 .448-1 1zM18.364 16.364c.552 0 1-.448 1-1 0-.552-.448-1-1-1-.552 0-1 .448-1 1 0 .552.448 1 1 1zM19.78 17.78c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0zM4.22 6.22c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0zM4.22 17.78c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24">
            <path d="M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6c1.012 0 1.97.255 2.805.705.835.45 1.537 1.11 2.045 1.91.508.8.75 1.73.75 2.705 0 3.309-2.691 6-6 6zm0-11c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"/>
            <path d="M12 22c-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1s1 .448 1 1v2c0 .552-.448 1-1 1zM12 4c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1s-1 .448-1 1v2c0 .552.448 1 1 1zM22 12c0-.552-.448-1-1-1h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1zM4 12c0 .552.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1H5c-.552 0-1 .448-1 1zM18.364 7.636c-.39.39-.39 1.024 0 1.414.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0zM5.636 18.364c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414zM19.78 17.78c-.39.39-.39 1.024 0 1.414.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0zM4.22 6.22c-.39.39-.39 1.024 0 1.414.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0z"/>
          </svg>
        )}
      </button>
    </>
  );
}