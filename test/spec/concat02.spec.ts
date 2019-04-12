import * as Data from './_data';

import { aliases as a, testAll } from '../util/utils';

/**
 * REQUEST: concat02.rq
 *
 * PREFIX : <http://example.org/>
 * SELECT (CONCAT(?str1,?str2) AS ?str) WHERE {
 *   ?s1 :str ?str1 .
 *   ?s2 :str ?str2 .
 * }
 */

/**
 * Manifest Entry
 * :concat02 rdf:type mf:QueryEvaluationTest ;
 *   mf:name    "CONCAT() 2" ;
 *   mf:feature sparql:concat ;
 *     dawgt:approval dawgt:Approved ;
 *     dawgt:approvedBy <http://www.w3.org/2009/sparql/meeting/2012-01-31#resolution_3> ;
 *     mf:action
 *          [ qt:query  <concat02.rq> ;
 *            qt:data   <data2.ttl> ] ;
 *     mf:result  <concat02.srx> ;
 *   .
 */

describe('We should respect the concat02 spec', () => {
  it('should handle all test cases correctly', () => {
    const {} = Data.data();
    testAll([

    ]);
  });
});

/**
 * RESULTS: concat02.srx
 *
 * <?xml version="1.0" encoding="utf-8"?>
 * <sparql xmlns="http://www.w3.org/2005/sparql-results#">
 * <head>
 *   <variable name="str"/>
 * </head>
 * <results>
 *   <result><binding name="str"><literal datatype="http://www.w3.org/2001/XMLSchema#string">abcabc</literal></binding></result>
 *   <result><binding name="str"><literal datatype="http://www.w3.org/2001/XMLSchema#string">abcdef</literal></binding></result>
 *   <result><binding name="str"><literal datatype="http://www.w3.org/2001/XMLSchema#string">defabc</literal></binding></result>
 *   <result><binding name="str"><literal datatype="http://www.w3.org/2001/XMLSchema#string">defdef</literal></binding></result>
 *   <result><binding name="str"><literal xml:lang="en">englishenglish</literal></binding></result>
 *   <result><binding name="str"><literal xml:lang="fr">françaisfrançais</literal></binding></result>
 *   <result><binding name="str"><literal xml:lang="ja">日本語日本語</literal></binding></result>
 *   <result><binding name="str"><literal>123abc</literal></binding></result>
 *   <result><binding name="str"><literal>123def</literal></binding></result>
 *   <result><binding name="str"><literal>123english</literal></binding></result>
 *   <result><binding name="str"><literal>123français</literal></binding></result>
 *   <result><binding name="str"><literal>123日本語</literal></binding></result>
 *   <result><binding name="str"><literal>123123</literal></binding></result>
 *   <result><binding name="str"><literal>abc123</literal></binding></result>
 *   <result><binding name="str"><literal>abcenglish</literal></binding></result>
 *   <result><binding name="str"><literal>abcfrançais</literal></binding></result>
 *   <result><binding name="str"><literal>abc日本語</literal></binding></result>
 *   <result><binding name="str"><literal>def123</literal></binding></result>
 *   <result><binding name="str"><literal>defenglish</literal></binding></result>
 *   <result><binding name="str"><literal>deffrançais</literal></binding></result>
 *   <result><binding name="str"><literal>def日本語</literal></binding></result>
 *   <result><binding name="str"><literal>english123</literal></binding></result>
 *   <result><binding name="str"><literal>englishabc</literal></binding></result>
 *   <result><binding name="str"><literal>englishdef</literal></binding></result>
 *   <result><binding name="str"><literal>englishfrançais</literal></binding></result>
 *   <result><binding name="str"><literal>english日本語</literal></binding></result>
 *   <result><binding name="str"><literal>français123</literal></binding></result>
 *   <result><binding name="str"><literal>françaisabc</literal></binding></result>
 *   <result><binding name="str"><literal>françaisdef</literal></binding></result>
 *   <result><binding name="str"><literal>françaisenglish</literal></binding></result>
 *   <result><binding name="str"><literal>français日本語</literal></binding></result>
 *   <result><binding name="str"><literal>日本語123</literal></binding></result>
 *   <result><binding name="str"><literal>日本語abc</literal></binding></result>
 *   <result><binding name="str"><literal>日本語def</literal></binding></result>
 *   <result><binding name="str"><literal>日本語english</literal></binding></result>
 *   <result><binding name="str"><literal>日本語français</literal></binding></result>
 *   <result></result> <!-- s1, s7 -->
 *   <result></result> <!-- s2, s7 -->
 *   <result></result> <!-- s3, s7 -->
 *   <result></result> <!-- s4, s7 -->
 *   <result></result> <!-- s5, s7 -->
 *   <result></result> <!-- s6, s7 -->
 *   <result></result> <!-- s7, s7 -->
 *   <result></result> <!-- s7, s1 -->
 *   <result></result> <!-- s7, s2 -->
 *   <result></result> <!-- s7, s3 -->
 *   <result></result> <!-- s7, s4 -->
 *   <result></result> <!-- s7, s5 -->
 *   <result></result> <!-- s7, s6 -->
 * </results>
 * </sparql>
 */

