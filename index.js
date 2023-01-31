const { Console } = require('console');
const fs = require('fs');
const datos = [
    {Columna :'1733',Id_pk :'1767'},
    {Columna :'1734',Id_pk :'1768'},
    {Columna :'1735',Id_pk :'1769'},
    {Columna :'1736',Id_pk :'1770'},
    {Columna :'1737',Id_pk :'1771'},
    {Columna :'1738',Id_pk :'1772'},
    {Columna :'1739',Id_pk :'1773'},
    {Columna :'1740',Id_pk :'1774'},
    {Columna :'1741',Id_pk :'1775'},
    {Columna :'1742',Id_pk :'1776'},
    {Columna :'1743',Id_pk :'1777'},
    {Columna :'1744',Id_pk :'1778'},
    {Columna :'1745',Id_pk :'1779'},
    {Columna :'1746',Id_pk :'1780'},
    {Columna :'1747',Id_pk :'1781'},
    {Columna :'1748',Id_pk :'1782'},
    {Columna :'1749',Id_pk :'1783'},
    {Columna :'1750',Id_pk :'1784'},
    {Columna :'1751',Id_pk :'1785'},
    {Columna :'1752',Id_pk :'1786'},
    {Columna :'1753',Id_pk :'1787'},
    {Columna :'1754',Id_pk :'1788'},
    {Columna :'1755',Id_pk :'1789'},
    {Columna :'1756',Id_pk :'1790'},
    {Columna :'1757',Id_pk :'1791'},
    {Columna :'1758',Id_pk :'1792'},
    {Columna :'1759',Id_pk :'1793'},
    {Columna :'1760',Id_pk :'1794'},
    {Columna :'1761',Id_pk :'1795'},
    {Columna :'1762',Id_pk :'1796'},
    {Columna :'1763',Id_pk :'1797'},
    {Columna :'1764',Id_pk :'1798'},
    {Columna :'1765',Id_pk :'1799'},
    {Columna :'1766',Id_pk :'1800'},
    {Columna :'1767',Id_pk :'1801'},
    {Columna :'1768',Id_pk :'1802'},
    {Columna :'1769',Id_pk :'1803'},
    {Columna :'1770',Id_pk :'1804'},
    {Columna :'1771',Id_pk :'1805'},
    {Columna :'1772',Id_pk :'1806'},
    {Columna :'1773',Id_pk :'1807'},
    {Columna :'1774',Id_pk :'1808'},
    {Columna :'1775',Id_pk :'1809'},
    {Columna :'1776',Id_pk :'1810'},
    {Columna :'1777',Id_pk :'1811'},
    {Columna :'1778',Id_pk :'1812'},
    {Columna :'1779',Id_pk :'1813'},
    {Columna :'1780',Id_pk :'1814'},
    {Columna :'1781',Id_pk :'1815'},
    {Columna :'1782',Id_pk :'1816'},
    {Columna :'1783',Id_pk :'1817'},
    {Columna :'1784',Id_pk :'1818'},
    {Columna :'1785',Id_pk :'1819'},
    {Columna :'1786',Id_pk :'1820'},
    {Columna :'1787',Id_pk :'1821'},
    {Columna :'1799',Id_pk :'1833'},
    {Columna :'1800',Id_pk :'1834'},
    {Columna :'1801',Id_pk :'1835'},
    {Columna :'1802',Id_pk :'1836'},
    {Columna :'1803',Id_pk :'1837'},
    {Columna :'1804',Id_pk :'1838'},
    {Columna :'1805',Id_pk :'1839'},
    {Columna :'1806',Id_pk :'1840'},
    {Columna :'1807',Id_pk :'1841'},
    {Columna :'1808',Id_pk :'1842'},
    {Columna :'1809',Id_pk :'1843'},
    {Columna :'1810',Id_pk :'1844'},
    {Columna :'1811',Id_pk :'1845'},
    {Columna :'1812',Id_pk :'1846'},
    {Columna :'1813',Id_pk :'1847'},
    {Columna :'1814',Id_pk :'1848'},
    {Columna :'1815',Id_pk :'1849'},
    {Columna :'1816',Id_pk :'1850'},
    {Columna :'1817',Id_pk :'1851'},
    {Columna :'1818',Id_pk :'1852'},
    {Columna :'1819',Id_pk :'1853'},
    {Columna :'1820',Id_pk :'1854'},
    {Columna :'1821',Id_pk :'1855'},
    {Columna :'1822',Id_pk :'1856'},
    {Columna :'1823',Id_pk :'1857'},
    {Columna :'1824',Id_pk :'1858'},
    {Columna :'1825',Id_pk :'1859'},
    {Columna :'1826',Id_pk :'1860'},
    {Columna :'1827',Id_pk :'1861'},
    {Columna :'1828',Id_pk :'1862'},
    {Columna :'1829',Id_pk :'1863'},
    {Columna :'1830',Id_pk :'1864'},
    {Columna :'1831',Id_pk :'1865'},
    {Columna :'1832',Id_pk :'1866'},
    {Columna :'1833',Id_pk :'1867'},
    {Columna :'1834',Id_pk :'1868'},
    {Columna :'1835',Id_pk :'1869'},
    {Columna :'1836',Id_pk :'1870'},
    {Columna :'1837',Id_pk :'1871'},
    {Columna :'1838',Id_pk :'1872'},
    {Columna :'1839',Id_pk :'1873'},
    {Columna :'1840',Id_pk :'1874'},
    {Columna :'1841',Id_pk :'1875'},
    {Columna :'1842',Id_pk :'1876'},
    {Columna :'1843',Id_pk :'1877'},
    {Columna :'1844',Id_pk :'1878'},
    {Columna :'1845',Id_pk :'1879'},
    {Columna :'1846',Id_pk :'1880'},
    {Columna :'1847',Id_pk :'1881'},
    {Columna :'1853',Id_pk :'1887'},
    {Columna :'1854',Id_pk :'1888'},
    {Columna :'1855',Id_pk :'1889'},
    {Columna :'1856',Id_pk :'1890'},
    {Columna :'1858',Id_pk :'1892'},
    {Columna :'1859',Id_pk :'1893'},
    {Columna :'1860',Id_pk :'1894'},
    {Columna :'1861',Id_pk :'1895'},
    {Columna :'1862',Id_pk :'1896'},
    {Columna :'1863',Id_pk :'1897'},
    {Columna :'1864',Id_pk :'1898'},
    {Columna :'1865',Id_pk :'1899'},
    {Columna :'1866',Id_pk :'1900'},
    {Columna :'1867',Id_pk :'1901'},
    {Columna :'1868',Id_pk :'1902'},
    {Columna :'1869',Id_pk :'1903'},
    {Columna :'1870',Id_pk :'1904'},
    {Columna :'1871',Id_pk :'1905'},
    {Columna :'1872',Id_pk :'1906'},
    {Columna :'1873',Id_pk :'1907'},
    {Columna :'1874',Id_pk :'1908'},
    {Columna :'1875',Id_pk :'1909'},
    {Columna :'1876',Id_pk :'1910'},
    {Columna :'1877',Id_pk :'1911'},
    {Columna :'1878',Id_pk :'1912'},
    {Columna :'1879',Id_pk :'1913'},
    {Columna :'1880',Id_pk :'1914'},
    {Columna :'1881',Id_pk :'1915'},
    {Columna :'1882',Id_pk :'1916'},
    {Columna :'1883',Id_pk :'1917'},
    {Columna :'1884',Id_pk :'1918'},
    {Columna :'1885',Id_pk :'1919'},
    {Columna :'1886',Id_pk :'1920'},
    {Columna :'1887',Id_pk :'1921'},
    {Columna :'1888',Id_pk :'1922'},
    {Columna :'1889',Id_pk :'1923'},
    {Columna :'1890',Id_pk :'1924'},
    {Columna :'1891',Id_pk :'1925'},
    {Columna :'1892',Id_pk :'1926'},
    {Columna :'1893',Id_pk :'1927'},
    {Columna :'1894',Id_pk :'1928'},
    {Columna :'1895',Id_pk :'1929'},
    {Columna :'1896',Id_pk :'1930'},
    {Columna :'1897',Id_pk :'1931'},
    {Columna :'1898',Id_pk :'1932'},
    {Columna :'1899',Id_pk :'1933'},
    {Columna :'1900',Id_pk :'1934'},
    {Columna :'1901',Id_pk :'1935'},
    {Columna :'1902',Id_pk :'1936'},
    {Columna :'1903',Id_pk :'1937'},
    {Columna :'1904',Id_pk :'1938'},
    {Columna :'1905',Id_pk :'1939'},
    {Columna :'1906',Id_pk :'1940'},
    {Columna :'1907',Id_pk :'1941'},
    {Columna :'1908',Id_pk :'1942'},
    {Columna :'1909',Id_pk :'1943'},
    {Columna :'1910',Id_pk :'1944'},
    {Columna :'1911',Id_pk :'1945'},
    {Columna :'1912',Id_pk :'1946'},
    {Columna :'1913',Id_pk :'1947'},
    {Columna :'1914',Id_pk :'1948'},
    {Columna :'1915',Id_pk :'1949'},
    {Columna :'1916',Id_pk :'1950'},
    {Columna :'1917',Id_pk :'1951'},
    {Columna :'1918',Id_pk :'1952'},
    {Columna :'1919',Id_pk :'1953'},
    {Columna :'1920',Id_pk :'1954'},
    {Columna :'1921',Id_pk :'1955'},
    {Columna :'1922',Id_pk :'1956'},
    {Columna :'1923',Id_pk :'1957'},
    {Columna :'1924',Id_pk :'1958'},
    {Columna :'1925',Id_pk :'1959'},
    {Columna :'1926',Id_pk :'1960'},
    {Columna :'1927',Id_pk :'1961'},
    {Columna :'1928',Id_pk :'1962'},
    {Columna :'1929',Id_pk :'1963'},
    {Columna :'1930',Id_pk :'1964'},
    {Columna :'1931',Id_pk :'1965'},
    {Columna :'1932',Id_pk :'1966'},
    {Columna :'1933',Id_pk :'1967'},
    {Columna :'1934',Id_pk :'1968'},
    {Columna :'1935',Id_pk :'1969'},
    {Columna :'1936',Id_pk :'1970'},
    {Columna :'1937',Id_pk :'1971'},
    {Columna :'1938',Id_pk :'1972'},
    {Columna :'1939',Id_pk :'1973'},
    {Columna :'1940',Id_pk :'1974'},
    {Columna :'1941',Id_pk :'1975'},
    {Columna :'1942',Id_pk :'1976'},
    {Columna :'1943',Id_pk :'1977'},
    {Columna :'1944',Id_pk :'1978'},
    {Columna :'1945',Id_pk :'1979'},
    {Columna :'1946',Id_pk :'1980'},
    {Columna :'1947',Id_pk :'1981'},
    {Columna :'1948',Id_pk :'1982'},
    {Columna :'1949',Id_pk :'1983'},
    {Columna :'1950',Id_pk :'1984'},
    {Columna :'1951',Id_pk :'1985'},
    {Columna :'1952',Id_pk :'1986'},
    {Columna :'1953',Id_pk :'1987'},
    {Columna :'1954',Id_pk :'1988'},
    {Columna :'1955',Id_pk :'1989'},
    {Columna :'1956',Id_pk :'1990'},
    {Columna :'1957',Id_pk :'1991'},
    {Columna :'1958',Id_pk :'1992'},
    {Columna :'1959',Id_pk :'1993'},
    {Columna :'1960',Id_pk :'1994'},
    {Columna :'1961',Id_pk :'1995'},
    {Columna :'1962',Id_pk :'1996'},
    {Columna :'1963',Id_pk :'1997'},
    {Columna :'1964',Id_pk :'1998'},
    {Columna :'1965',Id_pk :'1999'},
    {Columna :'1966',Id_pk :'2000'},
    {Columna :'1967',Id_pk :'2001'},
    {Columna :'1968',Id_pk :'2002'},
    {Columna :'1969',Id_pk :'2003'},
    {Columna :'1970',Id_pk :'2004'},
    {Columna :'1971',Id_pk :'2005'},
    {Columna :'1972',Id_pk :'2006'},
    {Columna :'1973',Id_pk :'2007'},
    {Columna :'1974',Id_pk :'2008'},
    {Columna :'1975',Id_pk :'2009'},
    {Columna :'1976',Id_pk :'2010'},
    {Columna :'1977',Id_pk :'2011'},
    {Columna :'1978',Id_pk :'2012'},
    {Columna :'1979',Id_pk :'1823'},
    {Columna :'1980',Id_pk :'1050'},
    {Columna :'1981',Id_pk :'1891'},
    {Columna :'1982',Id_pk :'2032'},
    {Columna :'1983',Id_pk :'2031'},
    {Columna :'1984',Id_pk :'1822'},
    {Columna :'1985',Id_pk :'2025'},
    {Columna :'1986',Id_pk :'2030'},
    {Columna :'1987',Id_pk :'1826'},
    {Columna :'1988',Id_pk :'2033'},
    {Columna :'1989',Id_pk :'2034'},
    {Columna :'1990',Id_pk :'1827'},

];


//console.log(datos);


console.log("Iniciando Lectura")
const files = fs.readdirSync("./fichas");
console.log("Finalizando Lectura")

files.map(carpeta => {
    //console.log(carpeta)
    let fotos = fs.readdirSync("./fichas/" + carpeta)
    

    if (fotos.length === 0) {
        // console.log('Empty')
    } else {

        datos.filter(dato => carpeta === dato.Columna)
        .map(({ Columna, Id_pk }) => {
            console.log(carpeta + "_" + Columna+". Id_pk es :"+Id_pk)
            console.log("Creando Carpeta");
            fs.mkdirSync('./newFichas/'+Id_pk+'/',{recursive:true});
            console.log('Carpeta Creada');
            
            console.log('Moviendo Fotos');
            fotos.map(foto => {
                console.log
               fs.copyFile('./fichas/'+carpeta+'/'+foto,'./newFichas/'+Id_pk+'/'+foto,(err)=>{
                if(err){
                    throw(err)
                }
               });

               
              
                //console.log('./fichas/'+carpeta+'/'+foto)
            })
            let cont = 1;
            fotos.map(foto =>{
                fs.renameSync('./newFichas/'+Id_pk+'/'+foto,'./newFichas/'+Id_pk+'/'+Id_pk+'-'+cont+'.jpg')
               cont = cont +1;
            })
            console.log('Fotos Listas');

            fotos.map(foto=>{
              //  console.log(foto.slice(0,4));
              console.log(carpeta+'/'+foto.slice(0,4))
                if(carpeta!=foto.slice(0,4)){
                    console.log('Distionto')
                }
            })
            
        })

        
        // console.log("Carpeta: " + carpeta + ", Tiene " + fotos.length + " fotos.")
        

    }
})


//console.log(files);