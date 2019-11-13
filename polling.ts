public pollingTask() {
    const httpUrl = this.http.get('http://localhost:3004/posts');
    timer(0, 1000)
      .pipe(concatMap(() => httpUrl),
        map((response) => response)
      )
      .pipe(filter((result: any) => result.status === false))
      .pipe(take(1))
      .subscribe((response) => console.log(response));
 }
