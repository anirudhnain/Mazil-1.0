package serverside;

import com.hp.hpl.jena.query.Dataset;
import com.hp.hpl.jena.query.Query;
import com.hp.hpl.jena.query.QueryExecution;
import com.hp.hpl.jena.query.QueryExecutionFactory;
import com.hp.hpl.jena.query.QueryFactory;
import com.hp.hpl.jena.query.QuerySolution;
import com.hp.hpl.jena.query.ResultSet;
import com.hp.hpl.jena.query.ResultSetFormatter;
import com.hp.hpl.jena.tdb.TDBFactory;
import com.google.gson.Gson;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class TDBquery

{

	public ArrayList<String> mList = new ArrayList<String> ();
	int count=0;

	public void TDBMethod(String sparqlQueryString,String foldername) {
		
		// Direct way: Make a TDB-back Jena model in the named directory.

		File directory = new File("MailDataset"+File.separator+foldername);

		String absPath = directory.getAbsolutePath();
		System.out.println("Absolute PATH----->"+absPath);
		Dataset dataset = TDBFactory.createDataset(absPath);

		System.out.println("sparqlQueryString-->>"+sparqlQueryString + "foldername -- >> "+foldername );
		Query query = QueryFactory.create(sparqlQueryString);

		QueryExecution qexec = QueryExecutionFactory.create(query, dataset);

		ResultSet results = qexec.execSelect();
		System.out.println(results);
		List<String> l = results.getResultVars();
		System.out.println(l);
		int lsize=l.size();
		//int i = 0;
		

		while (results.hasNext()) {
			QuerySolution qs = results.nextSolution();
			for(int t=0;t<lsize;++t){
				mList.add(qs.get(l.get(t).toString()).toString());
			}
			
			count++;
		}
		
		qexec.close();

		dataset.close();

	}
}
